import { OPERATE, REFRESH_OPERATION } from '../actions/player';

const initialState = {
  count: 0,
  operation: {
    action: '',
    source: ''
  }
};


export default function operation(state = initialState, action) {
  switch (action.type) {
    case OPERATE:
      return {
        ...state,
        count: state.count + 1,
        operation: {
          ...state.operation,
          ...action.operation
        }
      };
    case REFRESH_OPERATION:
      return {
        ...state,
        count: state.count + 1,
      }
    default:
      return state;
  }
}
