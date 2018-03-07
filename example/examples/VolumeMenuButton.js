import React from 'react';
import { Player, ControlBar, VolumeMenuButton } from 'video-react';

export default (props) => {
  return (
    <Player
      autoPlay
      poster="/static/poster.png"
    >
      <source src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4" type="video/mp4" />
      <ControlBar autoHide={false} disableDefaultControls>
        <VolumeMenuButton />
        <VolumeMenuButton vertical />
      </ControlBar>
    </Player>
  );
};
