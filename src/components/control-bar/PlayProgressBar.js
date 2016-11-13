import React, { PropTypes } from 'react';
import { formatTime } from '../../lib/utils';

const propTypes = {
  currentTime: PropTypes.number,
  duration: PropTypes.number,
  percentage: PropTypes.string,
};

// Shows play progress
export default function PlayProgressBar({ currentTime, duration, percentage }) {
  return (
    <div
      data-current-time={formatTime(currentTime, duration)}
      className="video-react-play-progress video-react-slider-bar"
      style={{
        width: percentage,
      }}
    >
      <span className="video-react-control-text"><span>Progress</span>: {percentage}</span>
    </div>
  );
}

PlayProgressBar.propTypes = propTypes;
