import React from 'react';
import {
  Player,
  ControlBar,
  PlayToggle,
  ReplayControl,
  ForwardControl,
  VolumeMenuButton,
  CurrentTimeDisplay,
  TimeDivider,
  DurationDisplay,
  ProgressControl,
  RemainingTimeDisplay,
  PlaybackRate,
  FullscreenToggle
} from 'video-react';

export default (props) => {
  return (
    <Player
      poster="/assets/poster.png"
    >
      <source src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4" />
      <source src="http://mirrorblender.top-ix.org/movies/sintel-1024-surround.mp4" />
      <source src="http://ftp.akl.lt/Video/Sintel/sintel-1024-surround.mp4" />
      <source
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      />

      <ControlBar
        order={13}
      >
        <PlayToggle
          order={1}
        />
        <ReplayControl
          seconds={30}
          order={2}
        />
        <ForwardControl
          seconds={30}
          order={3}
        />
        <VolumeMenuButton
          order={4}
        />
        <CurrentTimeDisplay
          order={5}
        />
        <TimeDivider
          order={6}
        />
        <DurationDisplay
          order={7}
        />
        <ProgressControl
          order={8}
        />
        <RemainingTimeDisplay
          order={9}
        />
        <PlaybackRate
          rates={[1, 1.25, 1.5, 2]}
          order={10}
        />
        <FullscreenToggle
          order={11}
        />
      </ControlBar>
    </Player>
  );
};
