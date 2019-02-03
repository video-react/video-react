import React from 'react';
import { shallow, mount } from 'enzyme';
import LoadProgressBar from '../components/control-bar/LoadProgressBar';

describe('LoadProgressBar', () => {
  it('should render with "div" tag', () => {
    const wrapper = mount(
      <LoadProgressBar
        buffered={{
          length: 1,
          start: () => {},
          end: () => {}
        }}
        duration={1000}
      />
    );
    expect(wrapper.find('div.video-react-load-progress').length).toBe(1);
  });

  it('should render with "video-react-load-progress" class', () => {
    const wrapper = shallow(
      <LoadProgressBar
        buffered={{
          length: 1,
          start: () => {},
          end: () => {}
        }}
        duration={1000}
      />
    );
    expect(wrapper.hasClass('video-react-load-progress')).toBe(true);
  });

  it('should render children when passed in', () => {
    const wrapper = shallow(
      <LoadProgressBar
        buffered={{
          length: 1,
          start: () => {},
          end: () => {}
        }}
        duration={1000}
      />
    );
    expect(wrapper.children().length).toBeGreaterThan(0);
  });
});
