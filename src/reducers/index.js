import { default as player } from './player';
import { default as operation } from './operation';
import { default as events } from './events';

export default function (state = {}, action) {
  return {
    player: player(state.player, action),
    operation: operation(state.operation, action),
    events: events(state.events, action),
  };
}
