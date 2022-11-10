const USER_AGENT =
  typeof window !== 'undefined' && window.navigator
    ? window.navigator.userAgent
    : '';
// const webkitVersionMap = (/AppleWebKit\/([\d.]+)/i).exec(USER_AGENT);
// const appleWebkitVersion = webkitVersionMap ? parseFloat(webkitVersionMap.pop()) : null;

/*
 * Device is an iPhone
 *
 * @type {Boolean}
 * @constant
 * @private
 */
export const IS_IPAD = /iPad/i.test(USER_AGENT);

// The Facebook app's UIWebView identifies as both an iPhone and iPad, so
// to identify iPhones, we need to exclude iPads.
// http://artsy.github.io/blog/2012/10/18/the-perils-of-ios-user-agent-sniffing/
export const IS_IPHONE = /iPhone/i.test(USER_AGENT) && !IS_IPAD;
export const IS_IPOD = /iPod/i.test(USER_AGENT);
export const IS_IOS = IS_IPHONE || IS_IPAD || IS_IPOD;
