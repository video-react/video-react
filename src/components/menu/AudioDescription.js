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
  if (!player.audioDescriptions.length && audioDescriptions) {
    const descriptions = [{ language: 'OFF' }, ...audioDescriptions];
    actions.setAudioDescriptions(descriptions);
  }

  if (!player.audioDescriptions || !player.activeAudioDescription) return null;

  const activeAudioDescription =
    player.audioDescriptions[player.activeAudioDescription];

  return (
    <div className={classNames(className)}>
      <audio autoPlay controls src={activeAudioDescription.file_url}>
        Your browser does not support the <code>audio</code> element for audio
        descriptions.
      </audio>
    </div>
  );
};

AudioDescription.propTypes = propTypes;
AudioDescription.displayName = 'AudioDescription';
export default AudioDescription;
