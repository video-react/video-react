import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';

import * as Dom from '../../utils/dom';
import { mergeAndSortChildren } from '../../utils';
import SeekBar from './SeekBar';

const propTypes = {
  children: PropTypes.node,
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
    const node = this.seekBar;
    const newTime = Dom.getPointerPosition(node, event).x * duration;
    const position = event.pageX - Dom.findElPosition(node).left;

    this.setState({
      mouseTime: {
        time: newTime,
        position
      }
    });
  }

  getDefaultChildren() {
    return [
      <SeekBar
        mouseTime={this.state.mouseTime}
        ref={c => {
          this.seekBar = c;
        }}
        {...this.props}
      />
    ];
  }

  getChildren() {
    const children = React.Children.toArray(this.props.children);
    const defaultChildren = this.getDefaultChildren();
    const { className, ...parentProps } = this.props; // remove className
    return mergeAndSortChildren(defaultChildren, children, parentProps);
  }

  render() {
    const { className } = this.props;
    const children = this.getChildren();
    return (
      <div
        onMouseMove={this.handleMouseMoveThrottle}
        className={classNames(
          'video-react-progress-control video-react-control',
          className
        )}
      >
        {children}
      </div>
    );
  }
}

ProgressControl.propTypes = propTypes;
ProgressControl.displayName = 'ProgressControl';
