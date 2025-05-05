let currentScroll = 0;
let targetScroll = 0;
let rafId;

function animateParallax() {
  currentScroll += (targetScroll - currentScroll) * 0.1;
  currentScroll = parseFloat(currentScroll.toFixed(1));

  handleParallaxEffect(".poster__pictureartist", 0.2, currentScroll);
  handleParallaxEffect(".poster__picture", 0.4, currentScroll);
  handleParallaxEffect(".poster__pictureforms1", 0.4, currentScroll);
  handleParallaxEffect(".poster__pictureforms2", 0.3, currentScroll);
  handleParallaxEffect(".poster__pictureforms3", 0.2, currentScroll);
  handleParallaxEffect(".poster__pictureforms4", 0.4, currentScroll);

  if (Math.abs(currentScroll - targetScroll) > 0.5) {
    rafId = requestAnimationFrame(animateParallax);
  } else {
    currentScroll = targetScroll;
    rafId = null;
  }
}

function handleParallaxEffect(selector, speedFactor, scrollY) {
  const parallaxElement = document.querySelector(selector);
  if (parallaxElement) {
    parallaxElement.style.transform = `translate3d(0, ${scrollY * speedFactor}px, 0)`;
  }
}

document.addEventListener("scroll", () => {
  handleParallaxEffect(".poster__picture", 0.6);
  handleParallaxEffect(".poster__pictureforms1", 0.4);
  handleParallaxEffect(".poster__pictureforms2", 0.3);
  handleParallaxEffect(".poster__pictureforms3", 0.2);
  handleParallaxEffect(".poster__pictureforms4", 0.6);
});