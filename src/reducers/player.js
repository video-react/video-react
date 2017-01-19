import {
  VOLUME_MUTE, LOAD_START, CAN_PLAY,
  WAITING, CAN_PLAY_THROUGH, PLAYING,
  PLAY, PAUSE, END, SEEKING, SEEKED,
  SEEKING_TIME, END_SEEKING, DURATION_CHANGE,
  TIME_UPDATE, VOLUME_CHANGE, PROGRESS_CHANGE,
  RATE_CHANGE
} from '../actions/video';
import { FULLSCREEN_CHANGE, PLAYER_ACTIVATE, USER_ACTIVATE } from '../actions/player';

const initialState = {
  currentSrc: null,
  duration: 0,
  currentTime: 0,
  seekingTime: 0,
  buffered: null,
  waiting: true,
  seeking: false,
  paused: true,
  autoPaused: false,
  ended: false,
  playbackRate: 1,
  muted: false,
  volume: 1,
  readyState: 0,
  networkState: 0,
  videoWidth: 0,
  videoHeight: 0,
  hasStarted: false,
  userActivity: true,
  isActive: false,
  isFullscreen: false,
};

export default function video(state = initialState, action) {
  switch (action.type) {
    case VOLUME_MUTE:
      return {
        ...state,
        muted: action.muted
      };
    case LOAD_START:
      return {
        ...state,
        hasStarted: false,
        ended: false,
        buffered: action.buffered,
      };
    case CAN_PLAY:
      return {
        ...state,
        waiting: false,
        videoWidth: action.videoWidth,
        videoHeight: action.videoHeight,
        duration: action.duration,
        currentSrc: action.currentSrc,
      };
    case WAITING:
      return {
        ...state,
        waiting: true
      };
    case CAN_PLAY_THROUGH:
    case PLAYING:
      return {
        ...state,
        waiting: false
      };
    case PLAY:
      return {
        ...state,
        ended: false,
        paused: false,
        autoPaused: false,
        waiting: false,
        hasStarted: true,
        duration: action.duration,
        currentSrc: action.currentSrc,
      };
    case PAUSE:
      return {
        ...state,
        paused: true
      };
    case END:
      return {
        ...state,
        ended: true
      };
    case SEEKING:
      return {
        ...state,
        seeking: true
      };
    case SEEKED:
      return {
        ...state,
        seeking: false
      };
    case SEEKING_TIME:
      return {
        ...state,
        seekingTime: action.time
      };
    case END_SEEKING:
      return {
        ...state,
        seekingTime: 0,
        currentTime: action.time
      };
    case DURATION_CHANGE:
      return {
        ...state,
        duration: action.duration
      };
    case TIME_UPDATE:
      return {
        ...state,
        currentTime: action.time
      };
    case VOLUME_CHANGE:
      return {
        ...state,
        volume: action.volume,
        muted: action.muted,
      };
    case PROGRESS_CHANGE:
      return {
        ...state,
        buffered: action.buffered
      };
    case RATE_CHANGE:
      return {
        ...state,
        playbackRate: action.rate
      };
    case FULLSCREEN_CHANGE:
      return {
        ...state,
        isFullscreen: !!action.isFullscreen,
      };
    case USER_ACTIVATE:
      return {
        ...state,
        userActivity: action.activity
      };
    case PLAYER_ACTIVATE:
      return {
        ...state,
        isActive: action.activity
      };
    default:
      return state;
  }
}
