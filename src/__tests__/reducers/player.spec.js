import deepFreeze from 'deep-freeze';
import player from '../../reducers/player';
import {
  LOAD_START,
  CAN_PLAY,
  WAITING,
  PLAYING,
  PLAY,
  PAUSE,
  END,
  SEEKING,
  SEEKED,
  SEEKING_TIME,
  END_SEEKING,
  DURATION_CHANGE,
  TIME_UPDATE,
  VOLUME_CHANGE,
  PROGRESS_CHANGE,
  RATE_CHANGE
} from '../../actions/video';
import {
  FULLSCREEN_CHANGE,
  PLAYER_ACTIVATE,
  USER_ACTIVATE
} from '../../actions/player';

describe('player', () => {
  it('should return the initail state', () => {
    const expectedInitialState = {
      activeTextTrack: null,
      currentSrc: null,
      duration: 0,
      currentTime: 0,
      seekingTime: 0,
      buffered: null,
      waiting: false,
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
      isFullscreen: false
    };
    expect(player(undefined, {})).toEqual(expectedInitialState);
  });

  it('should handle LOAD_START action', () => {
    const bufferTwo = {
      length: 2,
      start() {},
      end() {}
    };
    const stateBefore = {
      hasStarted: false,
      ended: false,
      buffered: null
    };
    const action = {
      type: LOAD_START,
      videoProps: {
        buffered: bufferTwo
      }
    };
    const stateAfter = {
      hasStarted: false,
      ended: false,
      buffered: {
        length: 2,
        start() {},
        end() {}
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
      videoProps: {
        videoWidth: 1080,
        videoHeight: 1920,
        duration: 52.209
      }
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
      waiting: false
    };
    const action = {
      type: WAITING
    };
    const stateAfter = {
      waiting: true
    };
    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(player(stateBefore, action)).toEqual(stateAfter);
  });

  it('should handle WAITING action with WAITING true', () => {
    const stateBefore = {
      waiting: true
    };
    const action = {
      type: WAITING
    };
    const stateAfter = {
      waiting: true
    };
    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(player(stateBefore, action)).toEqual(stateAfter);
  });

  it('should handle PLAYING action with WAITING false', () => {
    const stateBefore = {
      waiting: false
    };
    const action = {
      type: PLAYING
    };
    const stateAfter = {
      waiting: false
    };
    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(player(stateBefore, action)).toEqual(stateAfter);
  });

  it('should handle PLAYING action with WAITING true', () => {
    const stateBefore = {
      waiting: true
    };
    const action = {
      type: PLAYING
    };
    const stateAfter = {
      waiting: false
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
      duration: 0
    };
    const action = {
      type: PLAY,
      videoProps: {
        duration: 52.209
      }
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

  it('should handle PAUSE action', () => {
    const stateBefore = {
      paused: false
    };
    const action = {
      type: PAUSE
    };
    const stateAfter = {
      paused: true
    };
    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(player(stateBefore, action)).toEqual(stateAfter);
  });

  it('should handle END action', () => {
    const stateBefore = {
      ended: false
    };
    const action = {
      type: END
    };
    const stateAfter = {
      ended: true
    };
    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(player(stateBefore, action)).toEqual(stateAfter);
  });

  it('should handle SEEKING action', () => {
    const stateBefore = {
      seeking: false
    };
    const action = {
      type: SEEKING
    };
    const stateAfter = {
      seeking: true
    };
    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(player(stateBefore, action)).toEqual(stateAfter);
  });

  it('should handle SEEKED action', () => {
    const stateBefore = {
      seeking: false
    };
    const action = {
      type: SEEKED
    };
    const stateAfter = {
      seeking: false
    };
    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(player(stateBefore, action)).toEqual(stateAfter);
  });

  it('should handle SEEKING_TIME action', () => {
    const stateBefore = {
      seekingTime: 12
    };
    const action = {
      type: SEEKING_TIME,
      time: 12
    };
    const stateAfter = {
      seekingTime: 12
    };
    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(player(stateBefore, action)).toEqual(stateAfter);
  });

  it('should handle END_SEEKING action', () => {
    const stateBefore = {
      seekingTime: 1
    };
    const action = {
      type: END_SEEKING,
      time: 1
    };
    const stateAfter = {
      seekingTime: 0
    };
    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(player(stateBefore, action)).toEqual(stateAfter);
  });

  it('should handle DURATION_CHANGE action', () => {
    const stateBefore = {
      duration: 0
    };
    const action = {
      type: DURATION_CHANGE,
      videoProps: {
        duration: 23
      }
    };
    const stateAfter = {
      duration: 23
    };
    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(player(stateBefore, action)).toEqual(stateAfter);
  });

  it('should handle TIME_UPDATE action', () => {
    const stateBefore = {
      currentTime: 49.11
    };
    const action = {
      type: TIME_UPDATE,
      videoProps: {
        currentTime: 12.01
      }
    };
    const stateAfter = {
      currentTime: 12.01
    };
    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(player(stateBefore, action)).toEqual(stateAfter);
  });

  it('should handle VOLUME_CHANGE action', () => {
    const stateBefore = {
      volume: 0.99,
      muted: true
    };
    const action = {
      type: VOLUME_CHANGE,
      videoProps: {
        volume: 0.62,
        muted: false
      }
    };
    const stateAfter = {
      volume: 0.62,
      muted: false
    };
    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(player(stateBefore, action)).toEqual(stateAfter);
  });

  it('should handle PROGRESS_CHANGE action', () => {
    const bufferThree = {
      length: 3,
      start() {},
      end() {}
    };
    const stateBefore = {
      buffered: {
        length: 1,
        start() {},
        end() {}
      }
    };
    const action = {
      type: PROGRESS_CHANGE,
      videoProps: {
        buffered: bufferThree
      }
    };
    const stateAfter = {
      buffered: bufferThree
    };
    deepFreeze(stateBefore);
    deepFreeze(action);
    const stateResult = player(stateBefore, action);
    expect(stateResult.buffered.length).toEqual(stateAfter.buffered.length);
  });

  it('should handle RATE_CHANGE action', () => {
    const stateBefore = {
      playbackRate: 1
    };
    const action = {
      type: RATE_CHANGE,
      videoProps: {
        playbackRate: 1.1
      }
    };
    const stateAfter = {
      playbackRate: 1.1
    };
    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(player(stateBefore, action)).toEqual(stateAfter);
  });

  it('should handle FULLSCREEN_CHANGE action', () => {
    const stateBefore = {
      isFullscreen: false
    };
    const action = {
      type: FULLSCREEN_CHANGE,
      isFullscreen: true
    };
    const stateAfter = {
      isFullscreen: true
    };
    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(player(stateBefore, action)).toEqual(stateAfter);
  });

  it('should handle USER_ACTIVATE action', () => {
    const stateBefore = {
      userActivity: false
    };
    const action = {
      type: USER_ACTIVATE,
      activity: true
    };
    const stateAfter = {
      userActivity: true
    };
    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(player(stateBefore, action)).toEqual(stateAfter);
  });

  it('should handle PLAYER_ACTIVATE action', () => {
    const stateBefore = {
      isActive: true
    };
    const action = {
      type: PLAYER_ACTIVATE,
      activity: false
    };
    const stateAfter = {
      isActive: false
    };
    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(player(stateBefore, action)).toEqual(stateAfter);
  });
});
