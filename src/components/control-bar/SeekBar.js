import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';

import Slider from '../Slider';
import PlayProgressBar from './PlayProgressBar';
import LoadProgressBar from './LoadProgressBar';
import MouseTimeDisplay from './MouseTimeDisplay';
import { formatTime } from '../../utils';

const propTypes = {
  children: PropTypes.node,
  player: PropTypes.object,
  mouseTime: PropTypes.object,
  actions: PropTypes.object,
  className: PropTypes.string
};

export default class SeekBar extends Component {
  constructor(props, context) {
    super(props, context);

    this.getPercent = this.getPercent.bind(this);
    this.getNewTime = this.getNewTime.bind(this);
    this.stepForward = this.stepForward.bind(this);
    this.stepBack = this.stepBack.bind(this);

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  componentDidMount() {}

  componentDidUpdate() {}

  /**
   * Get percentage of video played
   *
   * @return {Number} Percentage played
   * @method getPercent
   */
  getPercent() {
    const { currentTime, seekingTime, duration } = this.props.player;
    const time = seekingTime || currentTime;
    const percent = time / duration;
    return percent >= 1 ? 1 : percent;
  }

  getNewTime(event) {
    const {
      player: { duration }
    } = this.props;
    const distance = this.slider.calculateDistance(event);
    const newTime = distance * duration;

    // Don't let video end while scrubbing.
    return newTime === duration ? newTime - 0.1 : newTime;
  }

  handleMouseDown() {}

  handleMouseUp(event) {
    const { actions } = this.props;
    const newTime = this.getNewTime(event);
    // Set new time (tell video to seek to new time)
    actions.seek(newTime);
    actions.handleEndSeeking(newTime);
  }

  handleMouseMove(event) {
    const { actions } = this.props;
    const newTime = this.getNewTime(event);
    actions.handleSeekingTime(newTime);
  }

  stepForward() {
    const { actions } = this.props;
    actions.forward(5);
  }

  stepBack() {
    const { actions } = this.props;
    actions.replay(5);
  }

  render() {
    const {
      children,
      player: { currentTime, seekingTime, duration, buffered },
      mouseTime,
      type
    } = this.props;
    const time = seekingTime || currentTime;

    const renderGrandchildren =
      children && children.props && children.props.children;

    const childrenToMerge = renderGrandchildren ? children.props.children : [];
    const label = `${type} progress bar`;

    return (
      <Slider
        ref={input => {
          this.slider = input;
        }}
        label={label}
        className={classNames(
          'video-react-progress-holder',
          this.props.className
        )}
        valuenow={(this.getPercent() * 100).toFixed(2)}
        valuetext={formatTime(time, duration)}
        onMouseDown={this.handleMouseDown}
        onMouseMove={this.handleMouseMove}
        onMouseUp={this.handleMouseUp}
        getPercent={this.getPercent}
        stepForward={this.stepForward}
        stepBack={this.stepBack}
        childrenToMerge={childrenToMerge}
      >
        <LoadProgressBar
          buffered={buffered}
          currentTime={time}
          duration={duration}
        />
        <MouseTimeDisplay duration={duration} mouseTime={mouseTime} />
        <PlayProgressBar currentTime={time} duration={duration} />
      </Slider>
    );
  }
}

SeekBar.propTypes = propTypes;
SeekBar.displayName = 'SeekBar';
