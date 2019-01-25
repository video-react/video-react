import React from 'react';
import { shallow } from 'enzyme';
import LoadingSpinner from '../components/LoadingSpinner';

describe('LoadingSpinner', () => {
  it('should render null with error', () => {
    const wrapper = shallow(
      <LoadingSpinner
        player={{
          error: true,
        }}
      />
    );
    expect(wrapper.type()).toBe(null);
  });

  it('should render "div" tag with seeking or waiting', () => {
    const wrapper = shallow(
      <LoadingSpinner
        player={{
          hasStarted: true,
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
          hasStarted: true,
          seeking: true,
          waiting: true,
        }}
      />
    );
    expect(wrapper.hasClass('video-react-loading-spinner')).toBe(true);
  });
});
