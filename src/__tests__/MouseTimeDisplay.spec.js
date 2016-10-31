import React from 'react';
import { shallow } from 'enzyme';
import { MouseTimeDisplay } from '../';

describe('MouseTimeDisplay', () => {
  it('should render with "div" tag', () => {
    const wrapper = shallow(
      <MouseTimeDisplay
        actions={{}}
        player={{}}
      />
      );
    expect(wrapper.type()).toBe('div');
  });

  it('should render with "video-react-mouse-display" class', () => {
    const wrapper = shallow(
      <MouseTimeDisplay
        actions={{}}
        player={{}}
      />);
    expect(wrapper.hasClass('video-react-mouse-display')).toBe(true);
  });

});


