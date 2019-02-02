import React from 'react';
import { Player, ControlBar, ReplayControl } from 'video-react';

export default props => {
  return (
    <Player
      autoPlay
      poster="/assets/poster.png"
      startTime={300}
      src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4"
    >
      <ControlBar autoHide={false}>
        <ReplayControl seconds={5} order={2.1} />
        <ReplayControl seconds={10} order={2.2} />
        <ReplayControl seconds={30} order={2.3} />
      </ControlBar>
    </Player>
  );
};
