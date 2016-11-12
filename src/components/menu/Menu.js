import React, { Component, PropTypes } from 'react';

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
    event.stopPropagation();
  }


  render() {
    return (
      <div
        className="video-react-menu"
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

