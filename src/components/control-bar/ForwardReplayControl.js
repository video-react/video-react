import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';

const propTypes = {
  actions: PropTypes.object,
  className: PropTypes.string,
  seconds: PropTypes.oneOf([5, 10, 30]),
};

const defaultProps = {
  seconds: 10,
};

export default (mode) => {
  class ForwardReplayControl extends Component {

    constructor(props, context) {
      super(props, context);
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      const { actions, seconds } = this.props;
      // Depends mode to implement different actions
      if (mode === 'forward') {
        actions.forward(seconds);
      } else {
        actions.replay(seconds);
      }
    }

    render() {
      const { seconds, className } = this.props;
      return (
        <button
          ref={
            (c) => {
              this.button = c;
            }
          }
          className={classNames(className, {
            [`video-react-icon-${mode}-${seconds}`]: true,
            [`video-react-${mode}-control`]: true,
          }, 'video-react-control video-react-button video-react-icon')}
          onClick={this.handleClick}
        >
          <span className="video-react-control-text">{`${mode} ${seconds} seconds`}</span>
        </button>
      );
    }
  }

  ForwardReplayControl.propTypes = propTypes;
  ForwardReplayControl.defaultProps = defaultProps;
  return ForwardReplayControl;
};

