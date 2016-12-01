import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import ClickableComponent from '../ClickableComponent';
import Popup from './Popup';

const propTypes = {
  inline: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  className: PropTypes.string,
};

const defaultProps = {
  inline: true,
};

export default class PopupButton extends Component {

  constructor(props, context) {
    super(props, context);
  }


  render() {
    const { inline, className } = this.props;
    const props = { ...this.props };
    delete props.children;
    delete props.inline;
    delete props.className;
    return (
      <ClickableComponent
        className={classNames(className, {
          'video-react-menu-button-inline': !!inline,
          'video-react-menu-button-popup': !inline,
        }, 'video-react-control video-react-button video-react-menu-button')}
        {...props}
      >
        <Popup {...this.props} />
      </ClickableComponent>
    );
  }

}

PopupButton.propTypes = propTypes;
PopupButton.defaultProps = defaultProps;

