function handleParallaxEffect(selector, speedFactor) {
  const scrollY = window.scrollY;
  const parallaxElement = document.querySelector(selector);
  if (parallaxElement) {
    parallaxElement.style.transform = `translateY(${scrollY * speedFactor}px)`;
  }
}

document.addEventListener("scroll", () => {
  handleParallaxEffect(".poster__pictureartist", 0.2);
  handleParallaxEffect(".poster__picture", 0.6);
  handleParallaxEffect(".poster__pictureforms1", 0.4);
  handleParallaxEffect(".poster__pictureforms2", 0.3);
  handleParallaxEffect(".poster__pictureforms3", 0.2);
  handleParallaxEffect(".poster__pictureforms4", 0.6);
});