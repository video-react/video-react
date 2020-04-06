import ForwardReplayControl from './ForwardReplayControl';

// Pass mode into parent function
const ReplayControl = ForwardReplayControl('rewind');
ReplayControl.displayName = 'ReplayControl';

export default ReplayControl;
