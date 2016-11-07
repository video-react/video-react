import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { blurNode } from '../../lib/dom';

const propTypes = {
  actions: PropTypes.object.isRequired,
  player: PropTypes.object.isRequired,
  seconds: React.PropTypes.oneOf([5, 10, 30]),
};

const defaultProps = {
  seconds: 30,
};

export default (mode) => {
  class ReplayControl extends Component {

    constructor(props, context) {
      super(props, context);
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      const { actions, seconds } = this.props;
      if (mode === 'replay') {
        actions.replay(seconds);
      } else {
        actions.forward(seconds);
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
          }, 'video-react-control video-react-button')}
          onClick={this.handleClick}
        >
          <span className="video-react-control-text">{`${mode} ${seconds} seconds`}</span>
        </button>
      );
    }
  }

  ReplayControl.propTypes = propTypes;
  ReplayControl.defaultProps = defaultProps;
  return ReplayControl;
};

