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
    // keep audio description in sync with video player
    if (!this.audioRef || !this.audioRef.current) return;

    // stop audio description if video is done
    if (this.props.player.currentTime > this.audioRef.current.duration) {
      this.audioRef.current.currentTime = 0;
      this.audioRef.current.pause();
    }

    // keep audio in sync with video
    if (
      Math.abs(
        this.audioRef.current.currentTime - this.props.player.currentTime
      ) > 0.5
    )
      this.audioRef.current.currentTime = this.props.player.currentTime;

    // update settings if necessary
    if (this.audioRef.current.volume !== this.props.player.volume)
      this.audioRef.current.volume = this.props.player.volume;
    if (this.props.player.paused && !this.audioRef.current.paused)
      this.audioRef.current.pause();
    if (!this.props.player.paused && this.audioRef.current.paused)
      this.audioRef.current.play();
    if (this.props.player.muted) this.audioRef.current.muted = true;
  }

  render() {
    const { player, className, actions, audioDescriptions } = this.props;

    if (!player.audioDescriptions.length && audioDescriptions) {
      const descriptions = [{ label: 'Off' }, ...audioDescriptions];
      actions.setAudioDescriptions(descriptions);
    }

    if (!player.audioDescriptions || !player.activeAudioDescription)
      return null;

    const activeAudioDescription =
      player.audioDescriptions[player.activeAudioDescription];

    return (
      <div className={classNames(className)}>
        <audio controls src={activeAudioDescription.src} ref={this.audioRef}>
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
