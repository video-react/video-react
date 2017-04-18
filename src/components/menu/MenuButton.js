import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import Menu from './Menu';
import MenuItem from './MenuItem';
import ClickableComponent from '../ClickableComponent';

const propTypes = {
  inline: PropTypes.bool,
  items: PropTypes.array,
  className: PropTypes.string,
  onSelectItem: PropTypes.func,
  children: PropTypes.any,
  selectedIndex: PropTypes.number,
};

export default class MenuButton extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      active: false,
      activateIndex: props.selectedIndex || 0,
    };

    this.commitSelection = this.commitSelection.bind(this);
    this.activateMenuItem = this.activateMenuItem.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderMenu = this.renderMenu.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleUpArrow = this.handleUpArrow.bind(this);
    this.handleDownArrow = this.handleDownArrow.bind(this);
    this.handleEscape = this.handleEscape.bind(this);
    this.handleReturn = this.handleReturn.bind(this);
    this.handleTab = this.handleTab.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleSelectItem = this.handleSelectItem.bind(this);
    this.handleIndexChange = this.handleIndexChange.bind(this);
  }

  // componentDidUpdate(prevProps) {
  // }

  commitSelection(index) {
    this.setState({
      activateIndex: index,
      active: false,
    });
    this.handleIndexChange(index);
  }

  activateMenuItem(index) {
    this.setState({
      activateIndex: index
    });
    this.handleIndexChange(index);
  }

  handleIndexChange(index) {
    const { onSelectItem } = this.props;
    onSelectItem(index);
  }

  handleClick() {
    this.setState({
      active: !this.state.active,
    });
  }

  handleFocus() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  handleBlur() {
    this.setState({
      active: false,
    });
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleUpArrow(e) {
    const { items } = this.props;
    if (this.state.active) {
      e.preventDefault();
      let newIndex = this.state.activateIndex - 1;
      if (newIndex < 0) {
        newIndex = items.length ? items.length - 1 : 0;
      }
      this.activateMenuItem(newIndex);
    }
  }

  handleDownArrow(e) {
    const { items } = this.props;
    if (this.state.active) {
      e.preventDefault();
      let newIndex = this.state.activateIndex + 1;
      if (newIndex >= items.length) {
        newIndex = 0;
      }
      this.activateMenuItem(newIndex);
    }
  }

  handleTab(e) {
    if (this.state.active) {
      e.preventDefault();
      this.commitSelection(this.state.activateIndex);
    }
  }

  handleReturn(e) {
    e.preventDefault();
    if (this.state.active) {
      this.commitSelection(this.state.activateIndex);
    } else {
      this.setState({
        active: true,
      });
    }
  }

  handleEscape() {
    this.setState({
      active: false,
      activateIndex: 0,
    });
  }

  handleKeyPress(event) {
    // Escape (27) key
    if (event.which === 27) {
      this.handleEscape(event);
    } else if (event.which === 9) { // Tab (9) key
      this.handleTab(event);
    } else if (event.which === 13) { // Enter (13) key
      this.handleReturn(event);
    } else if (event.which === 38) { // Up (38) key
      this.handleUpArrow(event);
    } else if (event.which === 40) { // Down (40) key press
      this.handleDownArrow(event);
    }
  }

  handleSelectItem(i) {
    this.commitSelection(i);
  }

  renderMenu() {
    if (!this.state.active) {
      return null;
    }

    const { items } = this.props;
    return (
      <Menu>
        {items.map((item, i) => (
          <MenuItem
            item={item}
            index={i}
            onSelectItem={this.handleSelectItem}
            activateIndex={this.state.activateIndex}
            key={`item-${i++}`}
          />
        ))}
      </Menu>
    );
  }

  render() {
    const { inline, className } = this.props;

    return (
      <ClickableComponent
        className={classNames(className, {
          'video-react-menu-button-inline': !!inline,
          'video-react-menu-button-popup': !inline,
          'video-react-menu-button-active': this.state.active,
        }, 'video-react-control video-react-button video-react-menu-button')}
        role="presentation"
        tabIndex="0"
        ref={(c) => {
          this.menuButton = c;
        }}
        onClick={this.handleClick}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
      >
        {this.props.children}
        {this.renderMenu()}
      </ClickableComponent>
    );
  }
}

MenuButton.propTypes = propTypes;

