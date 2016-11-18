import React from 'react';
import { shallow, mount } from 'enzyme';
import { Bezel } from '../';

describe('Bezel', () => {
  it('should render with "div" tag', () => {
    const wrapper = mount(
      <Bezel
        player={{
          bezelCount: 10,
          bezelStatus: 'replay-5'
        }}     
      />
    );
    console.log(wrapper.html());
    expect(wrapper.find('div.video-react-bezel-icon').length).toBe(1);
  });
});
