export const EVENT_PLAYER_KEYDOWN = 'video-react/EVENT_PLAYER_KEYDOWN';

export function handlePlayerKeyDown(e) {
  return {
    type: EVENT_PLAYER_KEYDOWN,
    event: e,
  };
}
