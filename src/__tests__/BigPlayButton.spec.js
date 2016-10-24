import React from 'react';
import { shallow } from 'enzyme';
import { BigPlayButton } from '../';

describe('BigPlayButton', () => {
  it('should render with "button" tag', () => {
    const wrapper = shallow(
      <BigPlayButton
        player={{
          hasStarted: false,
        }}
      />
    );

    expect(wrapper.type()).toBe('button');
  });

  it('should render with "big-play-button" class', () => {
    const wrapper = shallow(
      <BigPlayButton
        player={{
          hasStarted: false,
        }}
      />
    );
    expect(wrapper.hasClass('big-play-button')).toBe(true);
  });
});
