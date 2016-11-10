import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  item: PropTypes.object,
};

class MenuItem extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { item } = this.props;
    if (item.onClick) {
      item.onClick(item);
    }
  }

  render() {
    const { item } = this.props;
    return (
      <li
        className={classNames({
          'video-react-menu-item': true,
          'video-react-selected': item.selected,
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

export default MenuItem;
