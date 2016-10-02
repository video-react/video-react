
/* global describe it assert */

import React from 'react';
import { findDOMNode } from 'react-dom';
import TestUtils from 'react/lib/ReactTestUtils';

export default (component, name) => {
  it(`renders to <${name}>`, () => {
    const root = TestUtils.renderIntoDocument(component);
    const node = findDOMNode(root);
    assert.isNotNull(node);
    assert.equal(node.nodeName, name.toUpperCase());
  });
};
