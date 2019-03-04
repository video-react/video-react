/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { PrismCode } from 'react-prism';
import { Table } from 'reactstrap';
import Helmet from 'react-helmet';
import PlayerExample from '../examples/Player';
import PlayerControlExample from '../examples/PlayerControl';

const PlayerExampleSource = require('!!raw-loader!../examples/Player');
const PlayerControlExampleSource = require('!!raw-loader!../examples/PlayerControl');

export default function PlayerPage() {
  return (
    <div>
      <Helmet title="Player" />
      <h3>Player</h3>
      <p>
        <code>Player</code> is the root component of the Video-React player. All
        the others components should be in this component.
      </p>
      <h4>Attributes</h4>
      <p>
        All the attributes for the <code>Player</code> component, they can be
        added as React properties.
      </p>
      <Table bordered>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>fluid</code>
            </td>
            <td>bool</td>
            <td>true</td>
            <td>
              In <code>fluid</code> mode, it’s <code>100%</code> wide all the
              time, the height will be calculated by the video's ratio.
            </td>
          </tr>
          <tr>
            <td>
              <code>width</code>
            </td>
            <td>number</td>
            <td>-</td>
            <td>
              The width value of video, could be an number or percent or auto.
              (This attribute is effective only if you set <code>fluid</code> as{' '}
              <code>false</code>)
            </td>
          </tr>
          <tr>
            <td>
              <code>height</code>
            </td>
            <td>number</td>
            <td>-</td>
            <td>
              The height value of video, could be an number or percent or auto.
              (This attribute is effective only if you set <code>fluid</code> as{' '}
              <code>false</code>)
            </td>
          </tr>
          <tr>
            <td>
              <code>src</code>
            </td>
            <td>string</td>
            <td>-</td>
            <td>
              The URL of the video to embed. This is optional; you may instead
              use the <code>&lt;source&gt;</code> element within the{' '}
              <code>Player</code> block to specify the video to embed.
            </td>
          </tr>
          <tr>
            <td>
              <code>poster</code>
            </td>
            <td>string</td>
            <td>-</td>
            <td>
              A URL indicating a poster frame to show until the user plays or
              seeks. If this attribute isn't specified, nothing is displayed
              until the first frame is available; then the first frame is shown
              as the poster frame.
            </td>
          </tr>
          <tr>
            <td>
              <code>preload</code>
            </td>
            <td>enum</td>
            <td>-</td>
            <td>
              This enumerated attribute is intended to provide a hint to the
              browser about what the author thinks will lead to the best user
              experience. It may have one of the following values:
              <ul>
                <li>
                  <code>none</code>: indicates that the video should not be
                  preloaded.
                </li>
                <li>
                  <code>metadata</code>: indicates that only video metadata
                  (e.g. length) is fetched.
                </li>
                <li>
                  <code>auto</code>: indicates that the whole video file could
                  be downloaded, even if the user is not expected to use it.
                </li>
                <li>
                  <i>the empty string</i>: synonym of the auto value.
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <code>muted</code>
            </td>
            <td>bool</td>
            <td>false</td>
            <td>
              A Boolean attribute which indicates the default setting of the
              audio contained in the video. If set, the audio will be initially
              silenced. Its default value is false, meaning that the audio will
              be played when the video is played.
            </td>
          </tr>
          <tr>
            <td>
              <code>playsInline</code>
            </td>
            <td>bool</td>
            <td>false</td>
            <td>
              [iOS only]Determines whether HTML5 videos play inline or use the
              native full-screen controller.
            </td>
          </tr>
          <tr>
            <td>
              <code>aspectRatio</code>
            </td>
            <td>string</td>
            <td>auto</td>
            <td>
              The aspect ratio is the width of the video divided by its height.
              Posible values: <code>auto</code>, <code>16:9</code>,{' '}
              <code>4:3</code>, etc.
            </td>
          </tr>
          <tr>
            <td>
              <code>autoPlay</code>
            </td>
            <td>bool</td>
            <td>false</td>
            <td>
              if specified, the video automatically begins to play back as soon
              as it can do so without stopping to finish loading the data.
            </td>
          </tr>
          <tr>
            <td>
              <code>startTime</code>
            </td>
            <td>number</td>
            <td>-</td>
            <td>Seek the Video at A Specific Time On Load</td>
          </tr>
        </tbody>
      </Table>
      <h4>Properties</h4>
      <Table bordered>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>playbackRate</code>
            </td>
            <td>
              Sets or returns the speed of the video playback. For example:
              <pre>
                <PrismCode className="language-jsx">
                  {`<Player ref="player">
  <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
</Player>

// access the player object by ref
// set playbackRate to 2
this.refs.player.playbackRate = 2; `}
                </PrismCode>
              </pre>
            </td>
          </tr>
          <tr>
            <td>
              <code>muted</code>
            </td>
            <td>Sets or returns whether the video is muted or not</td>
          </tr>
          <tr>
            <td>
              <code>volume</code>
            </td>
            <td>Sets or returns the volume of the video</td>
          </tr>
          <tr>
            <td>
              <code>videoWidth</code>
            </td>
            <td>Returns the width of the video</td>
          </tr>
          <tr>
            <td>
              <code>videoHeight</code>
            </td>
            <td>Returns the height of the video</td>
          </tr>
          <tr>
            <td>
              <code>video</code>
            </td>
            <td>
              Returns the <code>Video</code> component object
            </td>
          </tr>
        </tbody>
      </Table>
      <h4>Methods</h4>
      <p>
        The <code>Player</code> component has some methods to control the video
        and the player.
      </p>
      <Table bordered>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a name="getState" />
              <code>getState()</code>
            </td>
            <td>
              Get the redux <a href="#state">State</a>. For example:
              <pre>
                <PrismCode className="language-jsx">
                  {`const { player } = this.refs.player.getState();
console.log(player.currentTime); // print current time`}
                </PrismCode>
              </pre>
            </td>
          </tr>
          <tr>
            <td>
              <code>play()</code>
            </td>
            <td>Play the video.</td>
          </tr>
          <tr>
            <td>
              <code>pause()</code>
            </td>
            <td>Pause the video.</td>
          </tr>
          <tr>
            <td>
              <code>load()</code>
            </td>
            <td>Change the video source and re-load the video</td>
          </tr>
          <tr>
            <td>
              <code>addTextTrack()</code>
            </td>
            <td>Add a new text track to the video</td>
          </tr>
          <tr>
            <td>
              <code>canPlayType()</code>
            </td>
            <td>Check if your browser can play different types of video:</td>
          </tr>
          <tr>
            <td>
              <code>seek(time)</code>
            </td>
            <td>Seek video by time (seconds)</td>
          </tr>
          <tr>
            <td>
              <code>forward(seconds)</code>
            </td>
            <td>Jump forward x seconds</td>
          </tr>
          <tr>
            <td>
              <code>replay(seconds)</code>
            </td>
            <td>Jump back x seconds</td>
          </tr>
          <tr>
            <td>
              <code>toggleFullscreen()</code>
            </td>
            <td>Enter or exist full screen</td>
          </tr>
          <tr>
            <td>
              <code>subscribeToStateChange(listener)</code>
            </td>
            <td>
              Subscribe to the <a href="#state">player state</a> changes.
              <pre>
                <PrismCode className="language-jsx">
                  {`componentDidMount() {
  // subscribe state change
  this.refs.player.subscribeToStateChange(this.handleStateChange.bind(this));
}

handleStateChange(state, prevState) {
  // copy player state to this component's state
  this.setState({
    player: state,
    currentTime: state.currentTime
  });
}`}
                </PrismCode>
              </pre>
            </td>
          </tr>
        </tbody>
      </Table>
      <h4>
        <a name="state" />
        State
      </h4>
      <p>
        We use <code>redux</code> to manage the player state. Using{' '}
        <a href="#getState">getState</a> method can get the state object. This
        is the list of all the states.
      </p>
      <Table bordered>
        <thead>
          <tr>
            <th>Name</th>
            <th colSpan="2">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>player</code>
            </td>
            <td colSpan="2">
              The <code>player</code> state includes all the states about the
              video and the player. Below is the properties list of the{' '}
              <code>player</code> state.
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>
              <code>currentSrc</code>
            </td>
            <td>Returns the URL of the current video</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>
              <code>duration</code>
            </td>
            <td>Returns the length of the current video (in seconds)</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>
              <code>currentTime</code>
            </td>
            <td>
              Returns the current playback position in the video (in seconds)
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>
              <code>seekingTime</code>
            </td>
            <td>
              Returns the current seeking position in the video (in seconds)
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>
              <code>buffered</code>
            </td>
            <td>
              Returns a TimeRanges object representing the buffered parts of the
              video
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>
              <code>waiting</code>
            </td>
            <td>Returns whether the player needs to buffer the next frame</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>
              <code>seeking</code>
            </td>
            <td>Returns whether the user is currently seeking in the video</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>
              <code>paused</code>
            </td>
            <td>Returns whether the player has been paused</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>
              <code>autoPaused</code>
            </td>
            <td>
              Returns whether the player has been paused by the player itself
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>
              <code>ended</code>
            </td>
            <td>Returns whether the playback of the video has ended or not</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>
              <code>playbackRate</code>
            </td>
            <td>Returns the speed of the video playback</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>
              <code>muted</code>
            </td>
            <td>Returns whether the video is muted or not</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>
              <code>volume</code>
            </td>
            <td>Returns the volume of the video.</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>
              <code>readyState</code>
            </td>
            <td>Returns the current ready state of the video</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>
              <code>networkState</code>
            </td>
            <td>Returns the current network state of the video</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>
              <code>videoWidth</code>
            </td>
            <td>Returns the volume of the video</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>
              <code>videoHeight</code>
            </td>
            <td>Returns the height of the video</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>
              <code>hasStarted</code>
            </td>
            <td>Returns whether the video has been started</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>
              <code>userActivity</code>
            </td>
            <td>Returns whether the user is in activity.</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>
              <code>isActive</code>
            </td>
            <td>Returns whether the player is in activity.</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>
              <code>isFullscreen</code>
            </td>
            <td>Returns whether the player is in fullscreen.</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>
              <code>videoId</code>
            </td>
            <td>Set the id of the video element.</td>
          </tr>
        </tbody>
      </Table>
      <h4>Examples</h4>
      <p>Some examples to show how to use the player.</p>
      <h5>Control the player</h5>
      <p>
        This is an example on how to control the player from outside the
        component.
      </p>
      <div className="docs-example">
        <PlayerControlExample />
      </div>
      <pre>
        <PrismCode className="language-jsx">
          {PlayerControlExampleSource}
        </PrismCode>
      </pre>
      <h5>Change the player url</h5>
      <p>This is an example on how to change the video url.</p>
      <div className="docs-example">
        <PlayerExample />
      </div>
      <pre>
        <PrismCode className="language-jsx">{PlayerExampleSource}</PrismCode>
      </pre>
    </div>
  );
}
