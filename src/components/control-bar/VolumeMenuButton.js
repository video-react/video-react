import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import PopupButton from '../popup/PopupButton';
import VolumeBar from '../volume-control/VolumeBar';


const propTypes = {
  player: PropTypes.object,
  actions: PropTypes.object,
  inline: PropTypes.bool,
  vertical: PropTypes.bool,
};

const defaultProps = {
  inline: true,
  vertical: false,
};


class VolumeMenuButton extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // const { player, actions } = this.props;
    // actions.toggleMuted(!player.muted);
  }

  get volumeLevel() {
    const { player: { volume, muted } } = this.props;
    let level = 3;
    if (volume === 0 || muted) {
      level = 0;
    } else if (volume < 0.33) {
      level = 1;
    } else if (volume < 0.67) {
      level = 2;
    }
    return level;
  }

  render() {
    const { vertical, player } = this.props;
    const level = this.volumeLevel;
    return (
      <PopupButton
        className={classNames({
          'video-react-volume-menu-button-vertical': vertical,
          'video-react-volume-menu-button-horizontal': !vertical,
          'video-react-vol-muted': player.muted,
          'video-react-vol-0': level === 0 && !player.muted,
          'video-react-vol-1': level === 1,
          'video-react-vol-2': level === 2,
          'video-react-vol-3': level === 3,
        }, 'video-react-volume-menu-button')}
        onClick={this.handleClick}
      >
        <VolumeBar {...this.props} />
      </PopupButton>
    );
  }
}

VolumeMenuButton.propTypes = propTypes;
VolumeMenuButton.defaultProps = defaultProps;
export default VolumeMenuButton;
