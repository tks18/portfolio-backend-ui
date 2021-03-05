export function ismobile() {
  var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
  if (width > 950) {
    return false;
  } else {
    return true;
  }
}
