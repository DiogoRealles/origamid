// EVENT CLICK
const button = document.querySelector('button');
const handleClick = (event: PointerEvent) => {
  console.log(event.pageX);
};
button?.addEventListener('pointerdown', handleClick);

// EVENT SCROLL
const handleScroll = (event: Event) => {
  console.log(event);
};
window.addEventListener('scroll', handleScroll);

const activeEvent = (event: Event) => {
  // EVENT MOUSEDOWN
  if (event instanceof MouseEvent) {
    console.log(event.pageX);
  }

  // EVENT TOUCHSTART
  if (event instanceof TouchEvent) {
    console.log(event.touches[0].pageX);
  }
};

document.documentElement.addEventListener('mousedown', activeEvent);
document.documentElement.addEventListener('touchstart', activeEvent);
window.addEventListener('keydown', activeEvent);
