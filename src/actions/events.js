export const EVENT_KEYDOWN = 'video-react/EVENT_KEYDOWN';

export function handleKeyDown(e) {
  return {
    type: EVENT_KEYDOWN,
    event: e,
  }
}
