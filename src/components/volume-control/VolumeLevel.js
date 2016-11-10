import React, { PropTypes } from 'react';

const propTypes = {
  percentage: PropTypes.string,
  vertical: PropTypes.bool,
};

const defaultProps = {
  percentage: '100%',
  vertical: false,
};

function VolumeLevel({ percentage, vertical }) {
  const style = {};
  if (vertical) {
    style.height = percentage;
  } else {
    style.width = percentage;
  }

  return (
    <div
      className="video-react-volume-level"
      style={style}
    >
      <span className="video-react-control-text" />
    </div>
  );
}

VolumeLevel.propTypes = propTypes;
VolumeLevel.defaultProps = defaultProps;
export default VolumeLevel;
