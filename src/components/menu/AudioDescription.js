import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const propTypes = {
  player: PropTypes.object,
  actions: PropTypes.object,
  className: PropTypes.string,
  audioDescriptions: PropTypes.any
};

const AudioDescription = ({
  player,
  actions,
  className,
  audioDescriptions
}) => {
  console.log(
    'ayyyyy look at these props for audio description: ',
    player,
    actions,
    className,
    audioDescriptions
  );

  if (!player.audioDescriptions.length && audioDescriptions) {
    actions.setAudioDescriptions(audioDescriptions);
  }

  if (!player.audioDescriptions || !player.selectedAudioDescription)
    return null;

  return (
    <div className={classNames(className)}>
      <audio controls src={player.audioDescription.src}>
        Your browser does not support the <code>audio</code> element for audio
        descriptions.
      </audio>
    </div>
  );
};

AudioDescription.propTypes = propTypes;
AudioDescription.displayName = 'AudioDescription';
export default AudioDescription;
