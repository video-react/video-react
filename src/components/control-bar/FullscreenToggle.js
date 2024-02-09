import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';

const propTypes = {
  actions: PropTypes.object,
  player: PropTypes.object,
  className: PropTypes.string
};

export default class FullscreenToggle extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { player, actions } = this.props;
    actions.toggleFullscreen(player);
  }

  render() {
    const { player, className } = this.props;

    const controlText = !player.isFullscreen
      ? 'Full Screen'
      : 'Exit Full Screen';

    return (
      <button
        className={classNames(
          className,
          {
            'video-react-icon-fullscreen-exit': player.isFullscreen,
            'video-react-icon-fullscreen': !player.isFullscreen
          },
          'video-react-fullscreen-control video-react-control video-react-button video-react-icon'
        )}
        ref={c => {
          this.button = c;
        }}
        type="button"
        tabIndex="0"
        onClick={this.handleClick}
      >
        <span className="video-react-control-text">{controlText}</span>
      </button>
    );
  }
}

FullscreenToggle.propTypes = propTypes;
FullscreenToggle.displayName = 'FullscreenToggle';
