import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import MenuButton from '../menu/MenuButton';

const propTypes = {
  player: PropTypes.object,
  actions: PropTypes.object,
  rates: PropTypes.array,
};

const defaultProps = {
  rates: [0.25, 0.5, 1, 1.25, 1.5, 2],
};

class PlaybackRate extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { player, actions, rates } = this.props;

    // this will select first one if the last one currently selected
    let newRate = rates[0];
    for (let i = 0; i < rates.length; i++) {
      if (rates[i] > player.playbackRate) {
        newRate = rates[i];
        break;
      }
    }
    actions.changeRate(newRate);
  }

  render() {
    const { rates, player, actions } = this.props;
    const items = rates.map(rate => (
      {
        label: `${rate}x`,
        value: rate,
        selected: rate === player.playbackRate,
        onClick: () => {
          actions.changeRate(rate);
        },
      }
    ));

    return (
      <MenuButton
        className={classNames({
          'video-react-playback-rate': true,
        })}
        onClick={this.handleClick}
        items={items}
      >
        <span className="video-react-control-text">Playback Rate</span>
        <div className="video-react-playback-rate-value">{player.playbackRate.toFixed(2)}x</div>
      </MenuButton>
    );
  }

}

PlaybackRate.propTypes = propTypes;
PlaybackRate.defaultProps = defaultProps;
export default PlaybackRate;

