import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import PlayToggle from './PlayToggle';

const propTypes = {
  actions: PropTypes.object,
  player: PropTypes.object,
  className: PropTypes.string
};

export default class CastPlayToggle extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { remotePlayerController } = this.props;
    remotePlayerController.playOrPause();
  }

  render() {
    const { remotePlayer, className } = this.props;

    // Controls remote player
    if (this.props.isCasting) {
      const controlText = remotePlayer.isPaused ? 'Play' : 'Pause';

      return (
        <button
          ref={c => {
            this.button = c;
          }}
          className={classNames(className, {
            'video-react-play-control': true,
            'video-react-control': true,
            'video-react-button': true,
            'video-react-paused': remotePlayer.isPaused,
            'video-react-playing': !remotePlayer.isPaused
          })}
          type="button"
          tabIndex="0"
          onClick={this.handleClick}
        >
          <span className="video-react-control-text">{controlText}</span>
        </button>
      );
    }

    // Controls local player
    return <PlayToggle {...this.props} />;
  }
}

CastPlayToggle.propTypes = propTypes;
CastPlayToggle.displayName = 'CastPlayToggle';
