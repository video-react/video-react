import React from 'react';
import { Player } from 'video-react';
import DashSource from "./DashSource";

export default props => {
    // Add customized HLSSource component into video-react Player
    // The Component with `isVideoChild` attribute will be added into `Video` component
    // Please use this url if you test it from local:
    // http://www.streambox.fr/playlists/x36xhzz/x36xhzz.m3u8

    const handleDashPlayer = (dash) => {
        // Use methods form dash.js to customise dashSource
        dash.setFastSwitchEnabled(true);
    };

    return (
      <Player>
        <DashSource
          isVideoChild
          src="http://dash.edgesuite.net/akamai/bbb_30fps/bbb_30fps.mpd"
          handleDashPlayer={handleDashPlayer}
        />
      </Player>
    );
};
