// Parallax effect for the hero background
window.addEventListener('scroll', function () {
    const hero = document.querySelector('.hero');
    let scrollPosition = window.scrollY;
    hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
  });
  
  // Button interactivity
  document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
      alert('Thanks for clicking! 🚀');
    });
  });
  