 /* global describe it assert */

import React from 'react';
import ReactDOM from 'react-dom';
import { Video } from '../dist/video-react.js';
import TestUtils from 'react/lib/ReactTestUtils';
import rendersToComponent from './testUtil.js';

describe('Video', () => {
  rendersToComponent(
    <Video />,
    'video'
  );
});

