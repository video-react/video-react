import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  actions: PropTypes.object,
  player: PropTypes.object,
};

export default class PlayToggle extends Component {

  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { actions, player } = this.props;
    // todo
  }

  render() {
    const { actions, player } = this.props;
    return (
      <button onClick={this.handleClick} className={classNames({
          'video-react-play-control': true,
          'video-react-control': true,
          'video-react-button': true,
          'video-react-paused': player.paused,
          'video-react-playing': !player.paused,
        })}>
      </button>
    );
  }
}

PlayToggle.propTypes = propTypes;
