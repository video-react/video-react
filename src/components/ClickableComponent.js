import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';

const propTypes = {
  tagName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  className: PropTypes.string,
};

const defaultProps = {
  tagName: 'div',
};

export default class ClickableComponent extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleKeypress = this.handleKeypress.bind(this);
  }

  handleKeypress(event) {
    // Support Space (32) or Enter (13) key operation to fire a click event
    if (event.which === 32 || event.which === 13) {
      event.preventDefault();
      this.handleClick(event);
    }
  }

  handleClick(event) {
    const { onClick } = this.props;
    onClick(event);
  }

  handleFocus(e) {
    document.addEventListener('keydown', this.handleKeypress);
    if (this.props.onFocus) {
      this.props.onFocus(e);
    }
  }

  handleBlur(e) {
    document.removeEventListener('keydown', this.handleKeypress);
    if (this.props.onBlur) {
      this.props.onBlur(e);
    }
  }

  render() {
    const Tag = this.props.tagName;
    const props = { ...this.props };
    delete props.tagName;
    delete props.className;
    return (
      <Tag
        className={classNames(this.props.className)}
        role="button"
        tabIndex="0"
        onClick={this.handleClick}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        {...props}
      />
    );
  }

}

ClickableComponent.propTypes = propTypes;
ClickableComponent.defaultProps = defaultProps;

