import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import * as Dom from '../../lib/dom';
import SeekBar from './SeekBar';

const propTypes = {
  player: PropTypes.object.isRequired,
};

export default class ProgressControl extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      mouseTime: {
        time: null,
        position: 0,
      },
    };

    this.handleMouseMoveThrottle = this.handleMouseMove.bind(this);
  }

  handleMouseMove(event) {
    if (!event.pageX) {
      return;
    }
    const { player: { duration } } = this.props;
    const node = findDOMNode(this.seekBar);
    const newTime = Dom.getPointerPosition(node, event).x * duration;
    const position = event.pageX - Dom.findElPosition(node).left;

    this.setState({
      mouseTime: {
        time: newTime,
        position,
      },
    });
  }

  render() {
    return (
      <div
        onMouseMove={this.handleMouseMoveThrottle}
        className="video-react-progress-control video-react-control"
      >
        <SeekBar
          mouseTime={this.state.mouseTime}
          ref={
            (c) => {
              this.seekBar = c;
            }
          }
          {...this.props}
        />
      </div>
    );
  }
}

ProgressControl.propTypes = propTypes;
