import PropTypes from 'prop-types';
import React, { Component } from 'react';

const propTypes = {
  actions: PropTypes.object,
  className: PropTypes.string,
  seconds: PropTypes.oneOf([5, 10, 15, 30])
};

const defaultProps = {
  seconds: 15
};

export default mode => {
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

      const modeName = mode === 'replay' ? 'rewind' : mode;

      const classNames = [
        'video-react-control',
        'video-react-button',
        'video-react-icon'
      ];
      classNames.push(
        `video-react-icon-${mode}-${seconds}`,
        `video-react-${mode}-control`
      );
      if (className) {
        classNames.push(className);
      }
      return (
        <button
          ref={c => {
            this.button = c;
          }}
          className={classNames.join(' ')}
          type="button"
          onClick={this.handleClick}
        >
          <span className="video-react-control-text">{`${modeName} ${seconds} seconds`}</span>
        </button>
      );
    }
  }

  ForwardReplayControl.propTypes = propTypes;
  ForwardReplayControl.defaultProps = defaultProps;
  return ForwardReplayControl;
};
