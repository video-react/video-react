import createStore from 'redux/lib/createStore';
import reducer from './reducers';
import * as playerActions from './actions/player';
import * as videoActions from './actions/video';
import * as eventsActions from './actions/events';


export default class Manager {
  constructor(video, rootElement) {
    this.store = createStore(reducer);

    this.video = video;
    this.rootElement = rootElement;
  }

  getActions() {
    const manager = this;
    const { dispatch } = this.store;
    const actions = {
      ...playerActions,
      ...videoActions,
      ...eventsActions,
    };

    function bindActionCreator(actionCreator) {
      return function () {
        const action = actionCreator.apply(manager, arguments);
        if (typeof action !== 'undefined') {
          dispatch(action);
        }
      };
    }

    return Object.keys(actions).filter(
      key => typeof actions[key] === 'function'
    ).reduce((boundActions, key) => {
      boundActions[key] = bindActionCreator(actions[key]);
      return boundActions;
    }, {});
  }

  getState() {
    return this.store.getState();
  }

  // subscribe state change
  subscribeToStateChange(listener, getState) {
    if (!getState) {
      getState = this.getState.bind(this);
    }

    let prevState = getState();

    const handleChange = () => {
      const state = getState();
      if (state === prevState) {
        return;
      }
      const prevStateCopy = prevState;
      prevState = state;
      listener(state, prevStateCopy);
    };

    return this.store.subscribe(handleChange);
  }

  // subscribe to operation state change
  subscribeToOperationStateChange(listener) {
    return this.subscribeToStateChange(listener, () => this.getState().operation);
  }

  // subscribe to player state change
  subscribeToPlayerStateChange(listener) {
    return this.subscribeToStateChange(listener, () => this.getState().player);
  }

  // subscribe to events state change
  subscribeToEventsStateChange(listener) {
    return this.subscribeToStateChange(listener, () => this.getState().events);
  }

}

