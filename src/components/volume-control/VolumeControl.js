import React from 'react';
import VolumeBar from './VolumeBar';

export default function VolumeControl() {
  return (
    <div
      className="video-react-volume-control video-react-control"
    >
      <VolumeBar {...this.props} />
    </div>
  );
}
