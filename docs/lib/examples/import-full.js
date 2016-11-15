import React from 'react';
import { Player, ControlBar, PlayToggle, ReplayControl,
  ForwardControl, VolumeMenuButton, CurrentTimeDisplay,
  TimeDivider, DurationDisplay, ProgressControl,
  RemainingTimeDisplay, PlaybackRate, FullscreenToggle } from 'video-react';

export default (props) => {
  return (
    <Player
      poster="/assets/poster.png"
    >
      <source src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4" />
      <source src="http://mirrorblender.top-ix.org/movies/sintel-1024-surround.mp4" />

      <ControlBar>
        <ReplayControl disabled />
        <FullscreenToggle
          order={11.0}
        />
        <PlayToggle
          order={1.0}
        />
        <ForwardControl
          seconds={30}
          order={3.0}
        />
        <VolumeMenuButton
          order={4.0}
        />
        <CurrentTimeDisplay
          order={5.0}
        />
        <TimeDivider
          order={6.0}
        />
        <DurationDisplay
          order={7.0}
        />
        <ProgressControl
          order={8.0}
        />
        <RemainingTimeDisplay
          order={9.0}
        />
        <PlaybackRate
          rates={[1, 1.25, 1.5, 2]}
          order={10.0}
        />
      </ControlBar>
    </Player>
  );
};
