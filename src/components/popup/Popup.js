import PropTypes from 'prop-types';
import React, { Component } from 'react';

const propTypes = {
  player: PropTypes.object,
  children: PropTypes.any,
};

export default class Popup extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    // event.stopPropagation();
  }

  render() {
    const { children } = this.props;
    return (
      <div
        className="video-react-menu"
        onClick={this.handleClick}
      >
        <div className="video-react-menu-content">
          { children }
        </div>
      </div>
    );
  }

}

Popup.propTypes = propTypes;

