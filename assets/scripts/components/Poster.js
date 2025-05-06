function handleParallaxEffect(selector, speedFactor) {
  const scrollY = window.scrollY;
  const parallaxElement = document.querySelector(selector);
  if (parallaxElement) {
    parallaxElement.style.transform = `translateY(${scrollY * speedFactor}px)`;
  }
}

document.addEventListener("scroll", () => {
  handleParallaxEffect(".poster__picture", 0.6);
  handleParallaxEffect(".poster__pictureform", 0.5);
});