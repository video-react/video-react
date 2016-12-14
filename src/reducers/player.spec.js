import deepFreeze from 'deep-freeze';
import { default as player } from './player';
import { VOLUME_MUTE, LOAD_START, CAN_PLAY,
  WAITING, CAN_PLAY_THROUGH, PLAYING,
  PLAY, PAUSE, END, SEEKING, SEEKED,
  SEEKING_TIME, END_SEEKING, DURATION_CHANGE,
  TIME_UPDATE, VOLUME_CHANGE, PROGRESS_CHANGE,
  RATE_CHANGE } from '../actions/video';
import { FULLSCREEN_CHANGE, PLAYER_ACTIVATE, USER_ACTIVATE } from '../actions/player';

describe('player', () => {

  it('should return the initail state', () => {
    const expectedInitialState = {
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
    expect(player(undefined, {})).toEqual(expectedInitialState);
  });

  it('should handle VOLUME_MUTE action with state muted', () => {
    const stateBefore = {
      muted: true
    };
    const action = {
      type: VOLUME_MUTE,
      muted: true
    };
    const stateAfter = {
      muted: true
    };
    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(player(stateBefore, action)).toEqual(stateAfter);
  });

  it('should handle VOLUME_MUTE action with state NOT muted', () => {
    const stateBefore = {
      muted: false
    };
    const action = {
      type: VOLUME_MUTE,
      muted: true
    };
    const stateAfter = {
      muted: true
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(player(stateBefore, action)).toEqual(stateAfter);
  });

  it('should handle LOAD_START action', () => {
    let bufferTwo = {
      length: 2,
      start: function () {},
      end: function () {}
    };
    const stateBefore = {
      hasStarted: false,
      ended: false,
      buffered: null
    };
    const action = {
      type: LOAD_START,
      buffered: bufferTwo
    };
    const stateAfter = {
      hasStarted: false,
      ended: false,
      buffered: {
        length: 2,
        start: function () {},
        end: function () {}
      }
    };
    deepFreeze(stateBefore);
    deepFreeze(action);
    const stateResult = player(stateBefore, action);
    expect(stateResult.buffered.length).toEqual(stateAfter.buffered.length);
  });

  it('should handle CAN_PLAY action', () => {
    const stateBefore = {
      waiting: true,
      videoWidth: 0,
      videoHeight: 0,
      duration: 0
    };
    const action = {
      type: CAN_PLAY,
      videoWidth: 1080,
      videoHeight: 1920,
      duration: 52.209
    };
    const stateAfter = {
      waiting: false,
      videoWidth: 1080,
      videoHeight: 1920,
      duration: 52.209
    };
    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(player(stateBefore, action)).toEqual(stateAfter);
  });

  it('should handle WAITING action with FALSE', () => {
    const stateBefore = {
      waiting: false,
    };
    const action = {
      type: WAITING,
    };
    const stateAfter = {
      waiting: true,
    };
    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(player(stateBefore, action)).toEqual(stateAfter);
  });

  it('should handle WAITING action with WAITING true', () => {
    const stateBefore = {
      waiting: true,
    };
    const action = {
      type: WAITING,
    };
    const stateAfter = {
      waiting: true,
    };
    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(player(stateBefore, action)).toEqual(stateAfter);
  });

  it('should handle PLAYING action with WAITING false', () => {
    const stateBefore = {
      waiting: false,
    };
    const action = {
      type: WAITING,
    };
    const stateAfter = {
      waiting: true,
    };
    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(player(stateBefore, action)).toEqual(stateAfter);
  });

  it('should handle PLAYING action with WAITING true', () => {
    const stateBefore = {
      waiting: true,
    };
    const action = {
      type: WAITING,
    };
    const stateAfter = {
      waiting: true,
    };
    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(player(stateBefore, action)).toEqual(stateAfter);
  });

  it('should handle PLAY action', () => {
    const stateBefore = {
      ended: false,
      paused: false,
      autoPaused: false,
      waiting: false,
      hasStarted: true,
      duration: 0,
    };
    const action = {
      type: PLAY,
      duration: 52.209
    };
    const stateAfter = {
      ended: false,
      paused: false,
      autoPaused: false,
      waiting: false,
      hasStarted: true,
      duration: 52.209
    };
    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(player(stateBefore, action)).toEqual(stateAfter);
  });

});
