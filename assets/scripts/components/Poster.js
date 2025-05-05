let currentScroll = 0;
let targetScroll = 0;
let rafId;

function animateParallax() {
  currentScroll += (targetScroll - currentScroll) * 0.1;

  handleParallaxEffect(".poster__pictureartist", 0.2, currentScroll);
  handleParallaxEffect(".poster__picture", 0.6, currentScroll);
  handleParallaxEffect(".poster__pictureforms1", 0.4, currentScroll);
  handleParallaxEffect(".poster__pictureforms2", 0.3, currentScroll);
  handleParallaxEffect(".poster__pictureforms3", 0.2, currentScroll);
  handleParallaxEffect(".poster__pictureforms4", 0.6, currentScroll);

  rafId = requestAnimationFrame(animateParallax);
}

function handleParallaxEffect(selector, speedFactor, scrollY) {
  const parallaxElement = document.querySelector(selector);
  if (parallaxElement) {
    parallaxElement.style.transform = `translateY(${scrollY * speedFactor}px)`;
  }
}

document.addEventListener("scroll", () => {
  targetScroll = window.scrollY;
  if (!rafId) animateParallax();
});