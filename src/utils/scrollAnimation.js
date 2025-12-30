export function initScrollAnimation() {
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  };

  const observerCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  const sections = document.querySelectorAll('.section');
  
  sections.forEach(section => {
    observer.observe(section);
  });

  if (sections.length > 0) {
    sections[0].classList.add('animate');
  }
}

