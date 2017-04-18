import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';

const propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
  activateIndex: PropTypes.number,
  onSelectItem: PropTypes.func,
};

export default class MenuItem extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { index, onSelectItem } = this.props;
    onSelectItem(index);
  }

  render() {
    const { item, index, activateIndex } = this.props;
    return (
      <li
        className={classNames({
          'video-react-menu-item': true,
          'video-react-selected': index === activateIndex,
        })}
        onClick={this.handleClick}
      >
        {item.label}
        <span className="video-react-control-text" />
      </li>
    );
  }
}

MenuItem.propTypes = propTypes;
