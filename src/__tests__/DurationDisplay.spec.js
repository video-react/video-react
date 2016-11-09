import React from 'react';
import { shallow, mount } from 'enzyme';
import { DurationDisplay } from '../';

describe('DurationDisplay', () => {
  it('should render with "div" tag', () => {
    const wrapper = mount(
      <DurationDisplay
        player = {{
            duration: 100,
            currentTime: 20,
        }}        
      />
    );
    expect(wrapper.find('div.video-react-duration-display').length).toBe(1);
  });
});
