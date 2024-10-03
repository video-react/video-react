import React from 'react';
import { shallow } from 'enzyme';
import PlayToggle from '../components/control-bar/PlayToggle';
import CastPlayToggle from '../components/control-bar/CastPlayToggle';

describe('CastPlayToggle', () => {
  it('should render with "button" tag when casting', () => {
    const wrapper = shallow(
      <CastPlayToggle
        remotePlayer={{
          isPaused: true
        }}
        isCasting
      />
    );

    expect(wrapper.type()).toBe('button');
  });

  it('should render with "PlayToggle" component when not casting', () => {
    const wrapper = shallow(<CastPlayToggle />);

    expect(wrapper.type()).toBe(PlayToggle);
  });

  it('should render with "video-react-button" class', () => {
    const wrapper = shallow(
      <CastPlayToggle
        isCasting
        remotePlayer={{
          isPaused: false
        }}
      />
    );
    expect(wrapper.hasClass('video-react-button')).toBe(true);
  });

  it('should render with "video-react-paused" class when video has been paused', () => {
    const wrapper = shallow(
      <CastPlayToggle
        isCasting
        remotePlayer={{
          isPaused: true
        }}
      />
    );
    expect(wrapper.hasClass('video-react-paused')).toBe(true);
  });

  it('should render with "video-react-playing" class when video is playing', () => {
    const wrapper = shallow(
      <CastPlayToggle
        isCasting
        remotePlayer={{
          isPaused: false
        }}
      />
    );
    expect(wrapper.hasClass('video-react-playing')).toBe(true);
  });

  it('should render with "video-react-playing" class when video is playing', () => {
    const playOrPauseFunc = jest.fn();
    const wrapper = shallow(
      <CastPlayToggle
        isCasting
        remotePlayer={{
          isPaused: false
        }}
        remotePlayerController={{
          playOrPause: playOrPauseFunc
        }}
      />
    );
    wrapper.find('button').simulate('click');
    expect(playOrPauseFunc).toHaveBeenCalledTimes(1);
  });
});
