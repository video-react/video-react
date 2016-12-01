import { EVENT_PLAYER_KEYDOWN } from '../actions/events';

const initialState = {
  playerKeyDown: {
    event: null,
    count: 0
  },
};


export default function events(state = initialState, action) {
  switch (action.type) {
    case EVENT_PLAYER_KEYDOWN:
      return {
        ...state,
        playerKeyDown: {
          event: action.event,
          count: state.playerKeyDown.count + 1
        }
      };
    default:
      return state;
  }
}
