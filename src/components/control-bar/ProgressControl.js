import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import classNames from 'classnames';

import * as Dom from '../../utils/dom';
import SeekBar from './SeekBar';

const propTypes = {
  player: PropTypes.object,
  className: PropTypes.string
};

export default class ProgressControl extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      mouseTime: {
        time: null,
        position: 0
      }
    };

    this.handleMouseMoveThrottle = this.handleMouseMove.bind(this);
  }

  handleMouseMove(event) {
    if (!event.pageX) {
      return;
    }
    const {
      player: { duration }
    } = this.props;
    const node = findDOMNode(this.seekBar);
    const newTime = Dom.getPointerPosition(node, event).x * duration;
    const position = event.pageX - Dom.findElPosition(node).left;

    this.setState({
      mouseTime: {
        time: newTime,
        position
      }
    });
  }

  render() {
    const { className } = this.props;
    return (
      <div
        onMouseMove={this.handleMouseMoveThrottle}
        className={classNames(
          'video-react-progress-control video-react-control',
          className
        )}
      >
        <SeekBar
          mouseTime={this.state.mouseTime}
          ref={c => {
            this.seekBar = c;
          }}
          {...this.props}
        />
      </div>
    );
  }
}

ProgressControl.propTypes = propTypes;
ProgressControl.displayName = 'ProgressControl';
