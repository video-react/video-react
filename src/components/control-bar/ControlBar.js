import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';

import ProgressControl from './ProgressControl';
import PlayToggle from './PlayToggle';
import ForwardControl from './ForwardControl';
import ReplayControl from './ReplayControl';
import FullscreenToggle from './FullscreenToggle';
import RemainingTimeDisplay from '../time-controls/RemainingTimeDisplay';
import CurrentTimeDisplay from '../time-controls/CurrentTimeDisplay';
import DurationDisplay from '../time-controls/DurationDisplay';
import TimeDivider from '../time-controls/TimeDivider';
import VolumeMenuButton from './VolumeMenuButton';
import PlaybackRateMenuButton from './PlaybackRateMenuButton';
import { mergeAndSortChildren } from '../../utils';

const propTypes = {
  children: PropTypes.any,
  autoHide: PropTypes.bool,
  autoHideTime: PropTypes.number, // used in Player
  disableDefaultControls: PropTypes.bool,
  disableCompletely: PropTypes.bool,
  className: PropTypes.string
};

const defaultProps = {
  autoHide: true,
  disableCompletely: false
};

export default class ControlBar extends Component {
  constructor(props) {
    super(props);

    this.getDefaultChildren = this.getDefaultChildren.bind(this);
    this.getFullChildren = this.getFullChildren.bind(this);
  }

  getDefaultChildren() {
    return [
      <PlayToggle key="play-toggle" order={1} />,
      <VolumeMenuButton key="volume-menu-button" order={4} />,
      <CurrentTimeDisplay key="current-time-display" order={5.1} />,
      <TimeDivider key="time-divider" order={5.2} />,
      <DurationDisplay key="duration-display" order={5.3} />,
      <ProgressControl key="progress-control" order={6} />,
      <FullscreenToggle key="fullscreen-toggle" order={8} />
    ];
  }

  getFullChildren() {
    return [
      <PlayToggle key="play-toggle" order={1} />,
      <ReplayControl key="replay-control" order={2} />,
      <ForwardControl key="forward-control" order={3} />,
      <VolumeMenuButton key="volume-menu-button" order={4} />,
      <CurrentTimeDisplay key="current-time-display" order={5} />,
      <TimeDivider key="time-divider" order={6} />,
      <DurationDisplay key="duration-display" order={7} />,
      <ProgressControl key="progress-control" order={8} />,
      <RemainingTimeDisplay key="remaining-time-display" order={9} />,
      <PlaybackRateMenuButton
        rates={[1, 1.25, 1.5, 2]}
        key="playback-rate"
        order={10}
      />,
      <FullscreenToggle key="fullscreen-toggle" order={11} />
    ];
  }

  getChildren() {
    const children = React.Children.toArray(this.props.children);
    const defaultChildren = this.props.disableDefaultControls
      ? []
      : this.getDefaultChildren();
    const { className, ...parentProps } = this.props; // remove className
    return mergeAndSortChildren(defaultChildren, children, parentProps);
  }

  render() {
    const { autoHide, className, disableCompletely } = this.props;
    const children = this.getChildren();

    return disableCompletely ? null : (
      <div
        className={classNames(
          'video-react-control-bar',
          {
            'video-react-control-bar-auto-hide': autoHide
          },
          className
        )}
      >
        {children}
      </div>
    );
  }
}

ControlBar.propTypes = propTypes;
ControlBar.defaultProps = defaultProps;
ControlBar.displayName = 'ControlBar';
