import PropTypes from 'prop-types';
import React, { Component } from 'react';

const propTypes = {
  children: PropTypes.any,
};

export default class Menu extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    // event.stopPropagation();
  }


  render() {
    return (
      <div
        className="video-react-menu video-react-lock-showing"
        role="presentation"
        onClick={this.handleClick}
      >
        <ul className="video-react-menu-content">
          {this.props.children}
        </ul>
      </div>
    );
  }
}

Menu.propTypes = propTypes;

