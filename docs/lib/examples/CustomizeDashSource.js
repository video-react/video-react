import React from 'react';
import { Player } from 'video-react';
import DashSource from './DashSource';

export default () => {
  // Add customized DashSource component into video-react Player
  // The Component with `isPlaying` attribute will be added into `Video` component
  // Please use this url if you test it from local:
  // https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd

  return (
    <Player>
      <DashSource
        isVideoChild
        isPlaying
        src="https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd"
      />
    </Player>
  );
};
