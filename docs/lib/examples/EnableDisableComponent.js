import React from 'react';
import { Player, ControlBar, ReplayControl,
  ForwardControl, CurrentTimeDisplay,
  TimeDivider, PlaybackRate, VolumeMenuButton
} from 'video-react';

export default (props) => {
  return (
    <Player
      poster="/assets/poster.png"
    >
      <source src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4" />
      <source src="http://mirrorblender.top-ix.org/movies/sintel-1024-surround.mp4" />

      <ControlBar>
        <ReplayControl seconds={10} order={1.1} />
        <ForwardControl seconds={30} order={1.2} />
        <CurrentTimeDisplay order={4.1} />
        <TimeDivider order={4.2} />
        <PlaybackRate
          rates={[1, 1.25, 1.5, 2]}
          order={7.1}
        />
        <VolumeMenuButton disabled />
      </ControlBar>
    </Player>
  );
};
