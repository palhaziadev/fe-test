let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;


// compare start and end position to get the direction of the swipe and call handler function
function handleGesture(onSwipeLeft, onSwipeRight) {
  if (touchendX <= touchstartX) {
    return onSwipeRight();
  }
  if (touchendX >= touchstartX) {
    return onSwipeLeft();
  }
}

// save touch start position
function touchStartHandler(event) {
  touchstartX = event.changedTouches[0].screenX;
  touchstartY = event.changedTouches[0].screenY;
}

//save touch end position and call handler
function touchEndHandler(onSwipeLeft, onSwipeRight, event) {
  touchendX = event.changedTouches[0].screenX;
  touchendY = event.changedTouches[0].screenY;
  handleGesture(onSwipeLeft, onSwipeRight);
}

export const swipeMixin = {
  methods: {
    addSwipeEventHandlers(element, onSwipeLeft, onSwipeRight) {
      element.addEventListener('touchstart', touchStartHandler, false);
      element.addEventListener('touchend', touchEndHandler.bind(null, onSwipeLeft, onSwipeRight), false);
    },
    removeSwipeEventHandlers(element) {
      element.removeEventListener('touchstart', touchStartHandler);
      element.removeEventListener('touchend', touchEndHandler);
    }
  }
}