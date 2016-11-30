export const VOLUME_MUTE = 'video-react/VOLUME_MUTE';
export const LOAD_START = 'video-react/LOAD_START';
export const CAN_PLAY = 'video-react/CAN_PLAY';
export const WAITING = 'video-react/WAITING';
export const CAN_PLAY_THROUGH = 'video-react/CAN_PLAY_THROUGH';
export const PLAYING = 'video-react/PLAYING';
export const PLAY = 'video-react/PLAY';
export const PAUSE = 'video-react/PAUSE';
export const END = 'video-react/END';
export const SEEKING = 'video-react/SEEKING';
export const SEEKED = 'video-react/SEEKED';
export const SEEKING_TIME = 'video-react/SEEKING_TIME';
export const END_SEEKING = 'video-react/END_SEEKING';
export const DURATION_CHANGE = 'video-react/DURATION_CHANGE';
export const TIME_UPDATE = 'video-react/TIME_UPDATE';
export const VOLUME_CHANGE = 'video-react/VOLUME_CHANGE';
export const PROGRESS_CHANGE = 'video-react/PROGRESS_CHANGE';
export const RATE_CHANGE = 'video-react/RATE_CHANGE';

export function handleMute(muted) {
  return {
    type: VOLUME_MUTE,
    muted
  };
}

export function handleLoadStart(buffered) {
  return {
    type: LOAD_START,
    buffered,
  };
}

export function handleCanPlay({ videoWidth, videoHeight, duration }) {
  return {
    type: CAN_PLAY,
    videoWidth,
    videoHeight,
    duration,
  };
}

export function handleWaiting() {
  return {
    type: WAITING,
  };
}

export function handleCanPlayThrough() {
  return {
    type: CAN_PLAY_THROUGH,
  };
}

export function handlePlaying() {
  return {
    type: PLAYING,
  };
}

export function handlePlay({ duration }) {
  return {
    type: PLAY,
    duration,
  };
}

export function handlePause() {
  return {
    type: PAUSE,
  };
}

export function handleEnd() {
  return {
    type: END,
  };
}

export function handleSeeking() {
  return {
    type: SEEKING,
  };
}

export function handleSeeked() {
  return {
    type: SEEKED,
  };
}

export function handleSeekingTime(time) {
  return {
    type: SEEKING_TIME,
    time,
  };
}

export function handleEndSeeking(time) {
  return {
    type: END_SEEKING,
    time,
  };
}

export function handleDurationChange(duration) {
  return {
    type: DURATION_CHANGE,
    duration,
  };
}

export function handleTimeUpdate(time) {
  return {
    type: TIME_UPDATE,
    time,
  };
}


export function handleVolumeChange(volume, muted) {
  return {
    type: VOLUME_CHANGE,
    volume,
    muted
  };
}


export function handleProgressChange(buffered) {
  return {
    type: PROGRESS_CHANGE,
    buffered,
  };
}


export function handleRateChange(rate) {
  return {
    type: RATE_CHANGE,
    rate,
  };
}

