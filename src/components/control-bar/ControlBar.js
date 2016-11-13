import React, { PropTypes, Component } from 'react';

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
import PlaybackRate from './PlaybackRate';

const propTypes = {
  actions: PropTypes.object,
  player: PropTypes.object,
  children: PropTypes.any,
};

export default class ControlBar extends Component {
  constructor(props) {
    super(props);

    this.getDefaultChildren = this.getDefaultChildren.bind(this);
    this.getFullChildren = this.getFullChildren.bind(this);
  }

  getDefaultChildren() {
    return [
      <PlayToggle
        {...this.props}
        key="play-toggle"
        order={1}
      />,
      <ReplayControl
        {...this.props}
        key="replay-control"
        order={2}
      />,
      <ForwardControl
        {...this.props}
        key="forward-control"
        order={3}
      />,
      <VolumeMenuButton
        {...this.props}
        key="volume-menu-button"
        order={4}
      />,
      <DurationDisplay
        {...this.props}
        key="duration-display"
        order={5}
      />,
      <ProgressControl
        {...this.props}
        key="progress-control"
        order={6}
      />,
      <RemainingTimeDisplay
        {...this.props}
        key="remaining-time-display"
        order={7}
      />,
      <FullscreenToggle
        {...this.props}
        key="fullscreen-toggle"
        order={8}
      />
    ];
  }

  getFullChildren() {
    return [
      <PlayToggle
        {...this.props}
        key="play-toggle"
        order={1}
      />,
      <ReplayControl
        {...this.props}
        key="replay-control"
        order={2}
      />,
      <ForwardControl
        {...this.props}
        key="forward-control"
        order={3}
      />,
      <VolumeMenuButton
        {...this.props}
        key="volume-menu-button"
        order={4}
      />,
      <CurrentTimeDisplay
        {...this.props}
        key="current-time-display"
        order={5}
      />,
      <TimeDivider
        {...this.props}
        key="time-divider"
        order={6}
      />,
      <DurationDisplay
        {...this.props}
        key="duration-display"
        order={7}
      />,
      <ProgressControl
        {...this.props}
        key="progress-control"
        order={8}
      />,
      <RemainingTimeDisplay
        {...this.props}
        key="remaining-time-display"
        order={9}
      />,
      <PlaybackRate
        {...this.props}
        rates={[1, 1.25, 1.5, 2]}
        key="playback-rate"
        order={10}
      />,
      <FullscreenToggle
        {...this.props}
        key="fullscreen-toggle"
        order={11}
      />
    ];
  }

  getChildren() {
    let children = React.Children.toArray(this.props.children);
    const defaultChildren = this.getDefaultChildren();
    children = children.concat(
      defaultChildren.filter(
        (c) => !children.find((component) =>
          component.type === c.type
        )
      )
    );
    return children
      .sort((a, b) => (a.props.order || 1) - (b.props.order - 1))
      .map((element) => {
        const e = React.cloneElement(
          element,
          this.props
        );
        return e;
      });
  }

  render() {
    const children = this.getChildren();
    return (
      <div className="video-react-control-bar">
        {children}
      </div>
    );
  }
}

ControlBar.propTypes = propTypes;
