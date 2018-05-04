import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import { formatTime } from '../../utils';

function MouseTimeDisplay({ duration, mouseTime, className, text }) {
  if (!mouseTime.time) {
    return null;
  }

  const time = text || formatTime(mouseTime.time, duration);

  return (
    <div
      className={classNames('video-react-mouse-display', className)}
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
  className: PropTypes.string,
};
MouseTimeDisplay.displayName = 'MouseTimeDisplay';

export default MouseTimeDisplay;
