import React from 'react';
import { Player } from 'video-react';
import HLSSource from './HLSSource';

export default (props) => {
  // Add customized HLSSource component into video-react Player
  // The Component with `isVideoChild` attribute will be added into `Video` component
  return (
    <Player>
      <HLSSource
        isVideoChild
        src="http://www.streambox.fr/playlists/x36xhzz/x36xhzz.m3u8"
      />
    </Player>
  );
};
