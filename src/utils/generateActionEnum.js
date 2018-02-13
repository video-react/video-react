export function generateActionsEnum(actionsArray) {
  return actionsArray.reduce((actions, action) =>
    (actions[action.replace('video-react/','')] = action) && (actions), {});
}

export default generateActionsEnum;