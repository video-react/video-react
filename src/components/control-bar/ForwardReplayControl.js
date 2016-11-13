import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { blurNode } from '../../lib/dom';

const propTypes = {
  actions: PropTypes.object,
  player: PropTypes.object,
  seconds: React.PropTypes.oneOf([5, 10, 30]),
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
      blurNode(this.button);
    }

    render() {
      const { seconds } = this.props;
      return (
        <button
          ref={
            c => {
              this.button = c;
            }
          }
          className={classNames({
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

