import React, { PropTypes } from 'react';
import { formatTime } from '../../utils';

function MouseTimeDisplay({ duration, mouseTime }) {
  if (!mouseTime.time) {
    return null;
  }

  const time = formatTime(mouseTime.time, duration);

  return (
    <div
      className="video-react-mouse-display"
      style={{
        left: `${mouseTime.position}px`,
      }}
      data-current-time={time}
    />
  );
}

MouseTimeDisplay.propTypes = {
  duration: PropTypes.number,
  mouseTime: PropTypes.object,
};

export default MouseTimeDisplay;
