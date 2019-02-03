import React from 'react';
import { Player, ControlBar } from 'video-react';
import DownloadButton from './DownloadButton';

export default props => {
  // Add customized HLSSource component into video-react Player
  // The Component with `isVideoChild` attribute will be added into `Video` component
  // Please use this url if you test it from local:
  // http://www.streambox.fr/playlists/x36xhzz/x36xhzz.m3u8
  return (
    <Player src="http://media.w3.org/2010/05/bunny/movie.mp4" autoPlay>
      <ControlBar autoHide={false}>
        <DownloadButton order={7} />
      </ControlBar>
    </Player>
  );
};
