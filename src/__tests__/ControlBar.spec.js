import React from 'react';
import { shallow } from 'enzyme';
import ControlBar from '../components/control-bar/ControlBar';

describe('ControlBar', () => {
  it('should render with "div" tag', () => {
    const wrapper = shallow(
      <ControlBar
        actions={{}}
        player={{
          hasStarted: false,
        }}
      />
    );

    expect(wrapper.type()).toBe('div');
  });

  it('should render with "video-react-control-bar" class', () => {
    const wrapper = shallow(
      <ControlBar
        actions={{}}
        player={{
          hasStarted: false,
        }}
      />
    );
    expect(wrapper.hasClass('video-react-control-bar')).toBe(true);
  });

  it('should has more than 1 children', () => {
    const wrapper = shallow(
      <ControlBar
        actions={{}}
        player={{
          hasStarted: false,
        }}
      />
    );
    expect(wrapper.children().length).toBeGreaterThan(0);
  });
});
