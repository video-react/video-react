import React from 'react';
import { shallow, mount } from 'enzyme';
import RemainingTimeDisplay from '../components/time-controls/RemainingTimeDisplay';

describe('RemainingTimeDisplay', () => {
  it('should render with "div" tag', () => {
    const wrapper = mount(
      <RemainingTimeDisplay
        player={{
          duration: 100,
          currentTime: 20
        }}
      />
    );
    expect(wrapper.find('div.video-react-remaining-time-display').length).toBe(
      1
    );
  });

  it('should has more than 1 children', () => {
    const wrapper = shallow(
      <RemainingTimeDisplay
        player={{
          duration: 100,
          currentTime: 20
        }}
      />
    );
    expect(wrapper.children().length).toBeGreaterThan(0);
  });
});
