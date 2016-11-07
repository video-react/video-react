import React from 'react';

import ProgressControl from './ProgressControl';
import PlayToggle from './PlayToggle';
import ForwardControl from './ForwardControl';
import ReplayControl from './ReplayControl';
import FullscreenToggle from './FullscreenToggle';


export default function ControlBar(props) {
  return (
    <div className="video-react-control-bar">
      <PlayToggle {...props} />
      <ForwardControl {...props} />
      <ReplayControl {...props} />
      <ProgressControl {...props} />
      <FullscreenToggle {...props} />
    </div>
  );
}
