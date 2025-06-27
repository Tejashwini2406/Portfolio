// script.js
// Add smooth scrolling for navigation links

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
      playSfx('menu');
    }
  });
});

// Video game-like sound effects
function playSfx(type) {
  let audio;
  if (type === 'menu') {
    audio = new Audio('https://cdn.pixabay.com/audio/2022/07/26/audio_124bfae7b2.mp3'); // UI click
  } else if (type === 'start') {
    audio = new Audio('https://cdn.pixabay.com/audio/2022/07/26/audio_124bfae7b2.mp3'); // Start sound (reuse or replace)
  }
  if (audio) {
    audio.volume = 0.15;
    audio.play();
  }
}
