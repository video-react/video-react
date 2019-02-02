import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import { formatTime } from '../../utils';

const propTypes = {
  currentTime: PropTypes.number,
  duration: PropTypes.number,
  percentage: PropTypes.string,
  className: PropTypes.string
};

// Shows play progress
export default function PlayProgressBar({
  currentTime,
  duration,
  percentage,
  className
}) {
  return (
    <div
      data-current-time={formatTime(currentTime, duration)}
      className={classNames(
        'video-react-play-progress video-react-slider-bar',
        className
      )}
      style={{
        width: percentage
      }}
    >
      <span className="video-react-control-text">
        {`Progress: ${percentage}`}
      </span>
    </div>
  );
}

PlayProgressBar.propTypes = propTypes;
PlayProgressBar.displayName = 'PlayProgressBar';
