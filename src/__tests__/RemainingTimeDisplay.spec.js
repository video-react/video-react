import React from 'react';
import { shallow, mount } from 'enzyme';
import { RemainingTimeDisplay } from '../';

describe('RemainingTimeDisplay', () => {
  it('should render with "div" tag', () => {
    const wrapper = mount(
      <RemainingTimeDisplay
        player = {{
            duration: 100,
            currentTime: 20,
        }}        
      />
    );
    expect(wrapper.find('div.video-react-remaining-time-display').length).toBe(1);
  });
});
