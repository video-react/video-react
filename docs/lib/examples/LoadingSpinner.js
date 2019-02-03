import React from 'react';
import { Player, LoadingSpinner } from 'video-react';

export default props => {
  return (
    <Player src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4">
      <LoadingSpinner />
    </Player>
  );
};
