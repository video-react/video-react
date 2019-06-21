/**
 * Offset Left
 * getBoundingClientRect technique from
 * John Resig http://ejohn.org/blog/getboundingclientrect-is-awesome/
 *
 * @function findElPosition
 * @param {ReactNodeRef} el React Node ref from which to get offset
 * @return {Object}
 */
export function findElPosition(el) {
  let box;

  if (el.getBoundingClientRect && el.parentNode) {
    box = el.getBoundingClientRect();
  }

  if (!box) {
    return {
      left: 0,
      top: 0
    };
  }

  const { body, documentElement: docEl } = document;

  const clientLeft = docEl.clientLeft || body.clientLeft || 0;
  const scrollLeft = window.pageXOffset || body.scrollLeft;
  const left = box.left + scrollLeft - clientLeft;

  const clientTop = docEl.clientTop || body.clientTop || 0;
  const scrollTop = window.pageYOffset || body.scrollTop;
  const top = box.top + scrollTop - clientTop;

  // Android sometimes returns slightly off decimal values, so need to round
  return {
    left: Math.round(left),
    top: Math.round(top)
  };
}

/**
 * Get pointer position in a React Node ref
 * Returns an object with x and y coordinates.
 * The base on the coordinates are the bottom left of the element.
 *
 * @function getPointerPosition
 * @param {ReactNodeRef} el React Node ref on which to get the pointer position on
 * @param {Event} event Event object
 * @return {Object} This object will have x and y coordinates corresponding to the mouse position
 */
export function getPointerPosition(el, event) {
  const position = {};
  const box = findElPosition(el);
  const boxW = el.offsetWidth;
  const boxH = el.offsetHeight;

  const boxY = box.top;
  const boxX = box.left;
  let evtPageY = event.pageY;
  let evtPageX = event.pageX;

  if (event.changedTouches) {
    evtPageX = event.changedTouches[0].pageX;
    evtPageY = event.changedTouches[0].pageY;
  }

  position.y = Math.max(0, Math.min(1, (boxY - evtPageY + boxH) / boxH));
  position.x = Math.max(0, Math.min(1, (evtPageX - boxX) / boxW));

  return position;
}

// blur an element
export function blurNode(reactNode) {
  if (reactNode && reactNode.blur) {
    reactNode.blur();
  }
}

// focus an element
export function focusNode(reactNode) {
  if (reactNode && reactNode.focus) {
    reactNode.focus();
  }
}

// check if an element has a class name
export function hasClass(elm, cls) {
  const classes = elm.className.split(' ');
  for (let i = 0; i < classes.length; i++) {
    if (classes[i].toLowerCase() === cls.toLowerCase()) {
      return true;
    }
  }
  return false;
}
