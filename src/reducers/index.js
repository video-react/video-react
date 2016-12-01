import { default as player } from './player';
import { default as operation } from './operation';

export default function (state = {}, action) {
  return {
    player: player(state.player, action),
    operation: operation(state.operation, action),
  };
}
