import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const propTypes = {
  duration: PropTypes.number,
  buffered: PropTypes.object,
  className: PropTypes.string
};

// Shows load progress
export default function LoadProgressBar({ buffered, duration, className }) {
  if (!buffered || !buffered.length) {
    return null;
  }
  let bufferedEnd = buffered.end(buffered.length - 1);
  const style = {};

  if (bufferedEnd > duration) {
    bufferedEnd = duration;
  }

  // get the percent width of a time compared to the total end
  function percentify(time, end) {
    const percent = time / end || 0; // no NaN
    return `${(percent >= 1 ? 1 : percent) * 100}%`;
  }

  // the width of the progress bar
  style.width = percentify(bufferedEnd, duration);

  let parts = [];

  // add child elements to represent the individual buffered time ranges
  for (let i = 0; i < buffered.length; i++) {
    const start = buffered.start(i);
    const end = buffered.end(i);
    // set the percent based on the width of the progress bar (bufferedEnd)
    const part = (
      <div
        style={{
          left: percentify(start, bufferedEnd),
          width: percentify(end - start, bufferedEnd)
        }}
        key={`part-${i}`}
      />
    );
    parts.push(part);
  }

  if (parts.length === 0) {
    parts = null;
  }

  return (
    <div
      style={style}
      className={classNames('video-react-load-progress', className)}
    >
      <span className="video-react-control-text">Loaded: 0%</span>
      {parts}
    </div>
  );
}

LoadProgressBar.propTypes = propTypes;
LoadProgressBar.displayName = 'LoadProgressBar';
