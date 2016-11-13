import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { blurNode } from '../../lib/dom';

const propTypes = {
  actions: PropTypes.object,
  player: PropTypes.object,
};


export default class FullscreenToggle extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
    this.requestFullscreen = this.requestFullscreen.bind(this);
    this.handleFullScreenChange = this.handleFullScreenChange.bind(this);
  }

  componentDidMount() {
    document.addEventListener('fullscreenchange', this.handleFullScreenChange);
    document.addEventListener('webkitfullscreenchange', this.handleFullScreenChange);
    document.addEventListener('mozfullscreenchange', this.handleFullScreenChange);
    document.addEventListener('MSFullscreenChange', this.handleFullScreenChange);
  }

  componentWillUnmount() {
    document.removeEventListener('fullscreenchange', this.handleFullScreenChange);
    document.removeEventListener('webkitfullscreenchange', this.handleFullScreenChange);
    document.removeEventListener('mozfullscreenchange', this.handleFullScreenChange);
    document.removeEventListener('MSFullscreenChange', this.handleFullScreenChange);
  }

  handleFullScreenChange() {
    const { actions } = this.props;
    actions.handleFullscreenChange(this.isFullscreen());
  }

  isFullscreen() {
    return (
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement
    );
  }

  isFullscreenEnabled() {
    return (
      document.fullscreenEnabled ||
      document.webkitFullscreenEnabled ||
      document.mozFullScreenEnabled ||
      document.msFullscreenEnabled
    );
  }

  // go full-screen
  requestFullscreen() {
    const { actions: { playerElement } } = this.props;

    if (playerElement.requestFullscreen) {
      playerElement.requestFullscreen();
    } else if (playerElement.webkitRequestFullscreen) {
      playerElement.webkitRequestFullscreen();
    } else if (playerElement.mozRequestFullScreen) {
      playerElement.mozRequestFullScreen();
    } else if (playerElement.msRequestFullscreen) {
      playerElement.msRequestFullscreen();
    }
  }

  exitFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }

  handleClick() {
    const { player, actions } = this.props;
    if (this.isFullscreenEnabled()) {
      if (this.isFullscreen()) {
        this.exitFullscreen();
      } else {
        this.requestFullscreen();
      }
    } else {
      actions.handleFullscreenChange(!player.isFullscreen);
    }

    blurNode(this.button);
  }

  render() {
    const { player } = this.props;
    return (
      <button
        className={classNames({
          'video-react-icon-fullscreen-exit': player.isFullscreen,
          'video-react-icon-fullscreen': !player.isFullscreen,
        }, 'video-react-fullscreen-control video-react-control video-react-button video-react-icon')}
        ref={
          c => {
            this.button = c;
          }
        }
        type="button"
        aria-live="polite"
        onClick={this.handleClick}
      >
        <span className="video-react-control-text">Non-Fullscreen</span>
      </button>
    );
  }
}

FullscreenToggle.propTypes = propTypes;
