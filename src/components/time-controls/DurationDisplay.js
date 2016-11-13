import React, { PropTypes } from 'react';
import { formatTime } from '../../lib/utils';

const propTypes = {
  player: PropTypes.object,
};

function DurationDisplay({ player: { duration } }) {
  const formattedTime = formatTime(duration);
  return (
    <div
      className="video-react-duration video-react-time-control video-react-control"
    >
      <div
        className="video-react-duration-display"
        aria-live="off"
      >
        <span className="video-react-control-text">Duration Time </span>
        {formattedTime}
      </div>
    </div>
  );
}

DurationDisplay.propTypes = propTypes;

export default DurationDisplay;
