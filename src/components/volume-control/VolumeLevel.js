import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const propTypes = {
  percentage: PropTypes.string,
  vertical: PropTypes.bool,
  className: PropTypes.string,
};

const defaultProps = {
  percentage: '100%',
  vertical: false,
};

function VolumeLevel({ percentage, vertical, className }) {
  const style = {};
  if (vertical) {
    style.height = percentage;
  } else {
    style.width = percentage;
  }

  return (
    <div
      className={classNames(className, 'video-react-volume-level')}
      style={style}
    >
      <span className="video-react-control-text" />
    </div>
  );
}

VolumeLevel.propTypes = propTypes;
VolumeLevel.defaultProps = defaultProps;
export default VolumeLevel;
