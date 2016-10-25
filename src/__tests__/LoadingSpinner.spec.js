import React from 'react';
import { shallow } from 'enzyme';
import { LoadingSpinner } from '../';

describe('LoadingSpinner', () => {
  it('should render with "div" tag', () => {
    const wrapper = shallow(
      <LoadingSpinner
        player={{
          seeking: true,
          waiting: true,
        }}
      />
      );
    expect(wrapper.type()).toBe('div');
  });

  it('should render with "video-react-loading-spinner" class', () => {
    const wrapper = shallow(
      <LoadingSpinner
        player={{
          seeking: true,
          waiting: true,
        }}
      />);
    expect(wrapper.hasClass('video-react-loading-spinner')).toBe(true);
  });

});