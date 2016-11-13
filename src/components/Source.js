import React, { PropTypes } from 'react';

const propTypes = {
  src: PropTypes.string.isRequired,
  media: PropTypes.string,
  type: PropTypes.string,
};

export default function Source(props) {
  const { src, media, type } = props;

  return (
    <source
      src={src}
      media={media}
      type={type}
    />
  );
}

Source.propTypes = propTypes;
