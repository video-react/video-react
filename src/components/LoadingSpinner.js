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
    if (!player.seeking && !player.waiting) {
      return null;
    }
    return (
      <div className="loading-spinner">
        <div className="bounce1" />
        <div className="bounce2" />
        <div className="bounce3" />
      </div>
    );
  }

}

LoadingSpinner.propTypes = propTypes;
