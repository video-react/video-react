import fullscreen from '../utils/fullscreen';

export const OPERATE = 'video-react/OPERATE';
export const FULLSCREEN_CHANGE = 'video-react/FULLSCREEN_CHANGE';
export const PLAYER_ACTIVATE = 'video-react/PLAYER_ACTIVATE';
export const USER_ACTIVATE = 'video-react/USER_ACTIVATE';
export const OPTIONS_OVERLAY_CHANGE = 'video-react/OPTIONS_OVERLAY_CHANGE';
export const AUDIO_DESCRIPTIONS = 'video-react/AUDIO_DESCRIPTIONS';
export const ACTIVE_AUDIO_DESCRIPTION = 'video-react/ACTIVE_AUDIO_DESCRIPTION';

export function handleFullscreenChange(isFullscreen) {
  return {
    type: FULLSCREEN_CHANGE,
    isFullscreen
  };
}

export function handleOptionsOverlayChange() {
  return {
    type: OPTIONS_OVERLAY_CHANGE
  };
}

export function setAudioDescriptions(audioDescriptions) {
  return {
    type: AUDIO_DESCRIPTIONS,
    audioDescriptions
  };
}

export function updateActiveAudioDescription(activeAudioDescription) {
  return {
    type: ACTIVE_AUDIO_DESCRIPTION,
    activeAudioDescription
  };
}

export function activate(activity) {
  return {
    type: PLAYER_ACTIVATE,
    activity
  };
}

export function userActivate(activity) {
  return {
    type: USER_ACTIVATE,
    activity
  };
}

export function play(
  operation = {
    action: 'play',
    source: ''
  }
) {
  this.video.play();

  return {
    type: OPERATE,
    operation
  };
}

export function pause(
  operation = {
    action: 'pause',
    source: ''
  }
) {
  this.video.pause();

  return {
    type: OPERATE,
    operation
  };
}

export function togglePlay(
  operation = {
    action: 'toggle-play',
    source: ''
  }
) {
  this.video.togglePlay();

  return {
    type: OPERATE,
    operation
  };
}

// seek video by time
export function seek(
  time,
  operation = {
    action: 'seek',
    source: ''
  }
) {
  this.video.seek(time);

  return {
    type: OPERATE,
    operation
  };
}

// jump forward x seconds
export function forward(
  seconds,
  operation = {
    action: `forward-${seconds}`,
    source: ''
  }
) {
  this.video.forward(seconds);

  return {
    type: OPERATE,
    operation
  };
}

// jump back x seconds
export function replay(
  seconds,
  operation = {
    action: `replay-${seconds}`,
    source: ''
  }
) {
  this.video.replay(seconds);

  return {
    type: OPERATE,
    operation
  };
}

export function changeRate(
  rate,
  operation = {
    action: 'change-rate',
    source: ''
  }
) {
  this.video.playbackRate = rate;

  return {
    type: OPERATE,
    operation
  };
}

export function changeVolume(
  volume,
  operation = {
    action: 'change-volume',
    source: ''
  }
) {
  let v = volume;
  if (volume < 0) {
    v = 0;
  }
  if (volume > 1) {
    v = 1;
  }
  this.video.volume = v;

  return {
    type: OPERATE,
    operation
  };
}

export function mute(
  muted,
  operation = {
    action: muted ? 'muted' : 'unmuted',
    source: ''
  }
) {
  this.video.muted = muted;

  return {
    type: OPERATE,
    operation
  };
}

export function toggleFullscreen(player) {
  if (fullscreen.enabled) {
    if (fullscreen.isFullscreen) {
      fullscreen.exit();
    } else {
      fullscreen.request(this.rootElement);
    }
    return {
      type: OPERATE,
      operation: {
        action: 'toggle-fullscreen',
        source: ''
      }
    };
  }

  return {
    type: FULLSCREEN_CHANGE,
    isFullscreen: !player.isFullscreen
  };
}
