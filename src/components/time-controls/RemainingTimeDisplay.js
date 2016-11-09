import React, { PropTypes } from 'react';
import { formatTime } from '../../lib/utils';

const propTypes = {
  player: PropTypes.object,
};

function RemainingTimeDisplay({ player: { currentTime, duration } }) {
  const remainingTime = duration - currentTime;
  const formattedTime = formatTime(remainingTime);
  return (
    <div
      className="video-react-remaining-time video-react-time-control video-react-control"
    >
      <div
        className="video-react-remaining-time-display"
        aria-live="off"
      >
        <span className="video-react-control-text">Remaining Time </span>
        -{formattedTime}
      </div>
    </div>
  );
}

RemainingTimeDisplay.propTypes = propTypes;

export default RemainingTimeDisplay;
