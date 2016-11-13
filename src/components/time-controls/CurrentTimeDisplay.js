import React, { PropTypes } from 'react';
import { formatTime } from '../../utils';

const propTypes = {
  player: PropTypes.object,
};

function CurrentTimeDisplay({ player: { currentTime, duration } }) {
  const formattedTime = formatTime(currentTime, duration);
  return (
    <div
      className="video-react-current-time video-react-time-control video-react-control"
    >
      <div
        className="video-react-current-time-display"
        aria-live="off"
      >
        <span className="video-react-control-text">Current Time </span>
        {formattedTime}
      </div>
    </div>
  );
}

CurrentTimeDisplay.propTypes = propTypes;

export default CurrentTimeDisplay;
