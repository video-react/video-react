import operation from './operation';
import { OPERATE } from '../actions/player';
import deepFreeze from 'deep-freeze';

describe('reducer', () => {
  it('should return the initail state', () => {
    const expectedInitialState = {
      count: 0,
      operation: {
        action: '',
        source: ''
      }
    };
    expect(operation(undefined, {})).toEqual(expectedInitialState);
  });

  it('should increase the count by action', () => {
    const stateBefore = {
      count: 0,
      operation: {
        action: '',
        source: ''
      }
    };
    const action = {
      type: OPERATE,
      operation: {
        action: '',
        source: ''
      }
    };
    const stateAfter = {
      count: 1,
      operation: {
        action: '',
        source: ''
      }
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(operation(stateBefore, action)).toEqual(stateAfter);
  });

  it('should increase the count 100 by calling the action 100 times', () => {
    const stateBefore = {
      count: 0,
      operation: {
        action: '',
        source: ''
      }
    };
    const action = {
      type: OPERATE,
      operation: {
        action: '',
        source: ''
      }
    };
    const stateAfter = {
      count: 100,
      operation: {
        action: '',
        source: ''
      }
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    let state = stateBefore;
    for (let i = 0; i < 100; i++) {
      // call operation
      state = operation(state, action);
    }

    expect(state).toEqual(stateAfter);
  });

});
