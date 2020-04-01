import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';

const propTypes = {
  player: PropTypes.object,
  actions: PropTypes.object,
  className: PropTypes.string,
  audioDescriptions: PropTypes.any
};

class AudioDescription extends Component {
  constructor(props, context) {
    super(props, context);

    this.audioRef = React.createRef();
  }

  componentDidUpdate() {
    console.log('uhhhhhh da ref: ', this.audioRef);
  }

  render() {
    const { player, className, actions, audioDescriptions } = this.props;

    if (!player.audioDescriptions.length && audioDescriptions) {
      const descriptions = [{ language: 'OFF' }, ...audioDescriptions];
      actions.setAudioDescriptions(descriptions);
    }

    if (!player.audioDescriptions || !player.activeAudioDescription)
      return null;

    const activeAudioDescription =
      player.audioDescriptions[player.activeAudioDescription];

    return (
      <div className={classNames(className)}>
        <audio
          autoPlay
          controls
          src={activeAudioDescription.file_url}
          ref={this.audioRef}
        >
          Your browser does not support the <code>audio</code> element for audio
          descriptions.
        </audio>
      </div>
    );
  }
}

AudioDescription.propTypes = propTypes;
AudioDescription.displayName = 'AudioDescription';
export default AudioDescription;
