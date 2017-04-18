import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';

const propTypes = {
  actions: PropTypes.object,
  player: PropTypes.object,
  className: PropTypes.string,
};

export default class PlayToggle extends Component {

  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { actions, player } = this.props;
    if (player.paused) {
      actions.play();
    } else {
      actions.pause();
    }
  }

  render() {
    const { player, className } = this.props;
    const controlText = player.paused ? 'Play' : 'Pause';

    return (
      <button
        ref={
          (c) => {
            this.button = c;
          }
        }
        className={classNames(className, {
          'video-react-play-control': true,
          'video-react-control': true,
          'video-react-button': true,
          'video-react-paused': player.paused,
          'video-react-playing': !player.paused,
        })}
        tabIndex="0"
        onClick={this.handleClick}
      >
        <span className="video-react-control-text">
          {controlText}
        </span>
      </button>
    );
  }
}

PlayToggle.propTypes = propTypes;
