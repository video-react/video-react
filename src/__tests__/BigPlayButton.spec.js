import React from 'react';
import { shallow } from 'enzyme';
import BigPlayButton from '../components/BigPlayButton';

describe('BigPlayButton', () => {
  it('should render with "button" tag', () => {
    const wrapper = shallow(
      <BigPlayButton
        player={{
          hasStarted: false,
          currentSrc: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
        }}
      />
    );

    expect(wrapper.type()).toBe('button');
  });

  it('should hide if video has been started', () => {
    const wrapper = shallow(
      <BigPlayButton
        player={{
          hasStarted: true,
          currentSrc: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
        }}
      />
    );
    expect(wrapper.hasClass('big-play-button-hide')).toBe(true);
  });

  it('should render with "video-react-big-play-button" class', () => {
    const wrapper = shallow(
      <BigPlayButton
        player={{
          hasStarted: false,
          currentSrc: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
        }}
      />
    );
    expect(wrapper.hasClass('video-react-big-play-button')).toBe(true);
  });

  it('should render with "video-react-big-play-button-center" class with center position', () => {
    const wrapper = shallow(
      <BigPlayButton
        position="center"
        player={{
          hasStarted: false,
          currentSrc: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
        }}
      />
    );
    expect(wrapper.hasClass('video-react-big-play-button-center')).toBe(true);
  });
});
