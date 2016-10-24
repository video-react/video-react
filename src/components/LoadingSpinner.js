import React, { Component, PropTypes } from 'react';

const propTypes = {
  player: PropTypes.object,
};

export default class LoadingSpinner extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
  }

  render() {
    const { player } = this.props;
    if (player.seeking || player.waiting) {
      return (
        <div className="loading-spinner">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
      );
    } else {
      return null;
    }
  }

}

LoadingSpinner.propTypes = propTypes;