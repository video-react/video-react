import React, { Component, PropTypes } from 'react';

const propTypes = {
  actions: PropTypes.object,
  player: PropTypes.object,
};

export default class BigPlayButton extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
  }

  handleClick() {
    const { actions } = this.props;
    actions.play();
  }

  render() {
    const { player } = this.props;
    if (player.hasStarted) {
      return null;
    }
    return (
      <button
        className="video-react-big-play-button"
        type="button"
        aria-live="polite"
        onClick={this.handleClick}
      >
        <span className="video-react-icon video-react-icon-play-arrow" />
      </button>
    );
  }
}

BigPlayButton.propTypes = propTypes;

