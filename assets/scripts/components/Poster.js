function handleParallaxEffect(selector, speedFactor) {
    const scrollY = window.scrollY;
    const parallaxElement = document.querySelector(selector);
    if (parallaxElement) {
      parallaxElement.style.transform = `translateY(${scrollY * speedFactor}px)`;
    }
  }
  
  document.addEventListener("scroll", () => {
    handleParallaxEffect(".poster__picture", -0.7);
    handleParallaxEffect(".poster__picture2", -0.2);
    handleParallaxEffect(".poster__picture3", 0.1);
  });