import React from 'react';
import { shallow } from 'enzyme';
import { ForwardReplayControl } from '../';

describe('ForwardReplayControl', () => {
  it('should render with "button" tag', () => {
    const wrapper = shallow(
      <ForwardReplayControl
        actions={{}}
        player={{}}
      />
    );

    expect(wrapper.type()).toBe('button');
  });

  it('should render with "video-react-forward-replay-control" class', () => {
    const wrapper = shallow(
      <ForwardReplayControl
        actions={{}}
        player={{}}
      />
    );
    expect(wrapper.hasClass('video-react-forward-replay-control')).toBe(true);
  });

 
});
