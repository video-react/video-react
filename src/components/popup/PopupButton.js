import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Popup from './Popup';

const propTypes = {
  inline: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

const defaultProps = {
  inline: true,
};

export default class PopupButton extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { onClick } = this.props;
    onClick(event);
  }


  render() {
    const { inline } = this.props;
    return (
      <div
        className={classNames(this.props.className, {
          'video-react-menu-button-inline': !!inline,
          'video-react-menu-button-popup': !inline,
        }, 'video-react-control video-react-button video-react-menu-button')}
        role="button"
        onClick={this.handleClick}
      >
        <Popup {...this.props} />
      </div>
    );
  }

}

PopupButton.propTypes = propTypes;
PopupButton.defaultProps = defaultProps;

