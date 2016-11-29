import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Menu from './Menu';
import MenuItem from './MenuItem';

const propTypes = {
  inline: PropTypes.bool,
  items: PropTypes.array,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.any,
};

export default class MenuButton extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
    this.renderMenu = this.renderMenu.bind(this);
  }

  handleClick(event) {
    if (this.props.onClick) {
      this.props.onClick(event);
    }
  }

  renderMenu() {
    const { items } = this.props;
    let i = 0;
    return (
      <Menu>
        {items.reverse().map(item => (
          <MenuItem item={item} key={`item-${i++}`} />
        ))}
      </Menu>
    );
  }

  render() {
    const { inline, className } = this.props;

    return (
      <div
        className={classNames(className, {
          'video-react-menu-button-inline': !!inline,
          'video-react-menu-button-popup': !inline,
        }, 'video-react-control video-react-button video-react-menu-button')}
        role="presentation"
        tabIndex="0"
        onClick={this.handleClick}
      >
        {this.props.children}
        {this.renderMenu()}
      </div>
    );
  }
}

MenuButton.propTypes = propTypes;

