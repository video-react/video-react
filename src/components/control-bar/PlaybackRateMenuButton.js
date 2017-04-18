import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import MenuButton from '../menu/MenuButton';

const propTypes = {
  player: PropTypes.object,
  actions: PropTypes.object,
  rates: PropTypes.array,
  className: PropTypes.string,
};

const defaultProps = {
  rates: [2, 1.5, 1.25, 1, 0.5, 0.25],
};

class PlaybackRateMenuButton extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleSelectItem = this.handleSelectItem.bind(this);
  }

  handleSelectItem(index) {
    const { rates, actions } = this.props;
    if (index >= 0 && index < rates.length) {
      actions.changeRate(rates[index]);
    }
  }

  render() {
    const { rates, player } = this.props;
    const items = rates.map(rate => (
      {
        label: `${rate}x`,
        value: rate,
      }
    ));
    const selectedIndex = rates.indexOf(player.playbackRate) || 0;

    return (
      <MenuButton
        className={classNames('video-react-playback-rate', this.props.className)}
        onSelectItem={this.handleSelectItem}
        items={items}
        selectedIndex={selectedIndex}
      >
        <span className="video-react-control-text">Playback Rate</span>
        <div className="video-react-playback-rate-value">{player.playbackRate.toFixed(2)}x</div>
      </MenuButton>
    );
  }

}

PlaybackRateMenuButton.propTypes = propTypes;
PlaybackRateMenuButton.defaultProps = defaultProps;
export default PlaybackRateMenuButton;

