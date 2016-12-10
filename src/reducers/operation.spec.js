import { default as reducer } from './operation';
import * as ActionType from '../actions/player'

describe('reducer', () => {
  it('returns the initail state', () => {
    const expectedInitialState = {
      count: 0,
      operation: {
        action: '',
        source: ''
      }
    };
    expect(reducer(undefined, {})).toEqual(expectedInitialState);
  });

  it('count increases for OPERATE', () => {
    let action = {
      type: ActionType.OPERATE,
    };
    let newState = reducer({count: 1}, action);
    expect(newState).toEqual({
      count: 2,
      operation:{}
    });
  });

  it('count increases for three times OPERATE', () => {
    let action = {
      type: ActionType.OPERATE,
    };
    let threeActions = [action, action, action];
    let newState = {};
    let count = 1;
    threeActions.forEach(() => {
      newState = reducer({ count: count + 1 }, action);
    });
    expect(newState).toEqual({
      count: 4,
      operation: {}
    });
  });
});
