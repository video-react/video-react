import React from 'react';

/**
 * @file format-time.js
 *
 * Format seconds as a time string, H:MM:SS or M:SS
 * Supplying a guide (in seconds) will force a number of leading zeros
 * to cover the length of the guide
 *
 * @param  {Number} seconds Number of seconds to be turned into a string
 * @param  {Number} guide   Number (in seconds) to model the string after
 * @return {String}         Time formatted as H:MM:SS or M:SS
 * @private
 * @function formatTime
 */
export function formatTime(seconds = 0, guide = seconds) {
  let s = Math.floor(seconds % 60);
  let m = Math.floor(seconds / 60 % 60);
  let h = Math.floor(seconds / 3600);
  const gm = Math.floor(guide / 60 % 60);
  const gh = Math.floor(guide / 3600);

  // handle invalid times
  if (isNaN(seconds) || seconds === Infinity) {
    // '-' is false for all relational operators (e.g. <, >=) so this setting
    // will add the minimum number of fields specified by the guide
    h = m = s = '-';
  }

  // Check if we need to show hours
  h = (h > 0 || gh > 0) ? `${h}:` : '';

  // If hours are showing, we may need to add a leading zero.
  // Always show at least one digit of minutes.
  m = `${(((h || gm >= 10) && m < 10) ? `0${m}` : m)}:`;

  // Check if leading zero is need for seconds
  s = (s < 10) ? `0${s}` : s;

  return h + m + s;
}

// Check if the element belongs to a video element
// only accept <source />, <track />,
// <MyComponent isVideoChild />
// elements
export function isVideoChild(c) {
  if (c.props && c.props.isVideoChild) {
    return true;
  }
  return (c.type === 'source' || c.type === 'track');
}

// merge default children
// sort them by `order` property
// filter them by `disabled` property
export function mergeAndSortChildren(defaultChildren, _children, _parentProps, defaultOrder = 1) {
  const children = React.Children.toArray(_children);
  const parentProps = { ..._parentProps };
  return children
    .filter((e) => !e.props.disabled)
    .concat(
      defaultChildren.filter(
        (c) => !children.find((component) =>
          component.type === c.type
        )
      )
    )
    .map((element) => {
      const defaultComponent = defaultChildren.find((c) => c.type === element.type);
      delete parentProps.order;
      const defaultProps = defaultComponent ? defaultComponent.props : {};
      const props = {
        ...parentProps, // inherit from parent component
        ...defaultProps, // inherit from default component
        ...element.props, // element's own props
      };
      const e = React.cloneElement(
        element,
        props,
        element.props.children
      );
      return e;
    })
    .sort((a, b) => (a.props.order || defaultOrder) - (b.props.order || defaultOrder));
}
