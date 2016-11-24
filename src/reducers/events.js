import { EVENT_KEYDOWN } from '../actions/events';

const initialState = {
  keyDown: {
    event: null,
    count: 0
  },
};


export default function events(state = initialState, action) {
  switch (action.type) {
    case EVENT_KEYDOWN:
      return {
        ...state,
        keyDown: {
          event: action.event,
          count: state.keyDown.count + 1
        }
      };
    default:
      return state;
  }
}
