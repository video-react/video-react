import React from 'react';

import ProgressControl from './ProgressControl';
import PlayToggle from './PlayToggle';
import ForwardControl from './ForwardControl';
import ReplayControl from './ReplayControl';
import FullscreenToggle from './FullscreenToggle';
import VolumeMenuButton from './VolumeMenuButton';
import PlaybackRate from './PlaybackRate';


export default function ControlBar(props) {
  return (
    <div className="video-react-control-bar">
      <PlayToggle {...props} />
      <ReplayControl {...props} />
      <ForwardControl {...props} />
      <ProgressControl {...props} />
       <PlaybackRate {...props} rates={[1, 1.25, 1.5, 2]} />
      <FullscreenToggle {...props} />
    </div>
  );
}
