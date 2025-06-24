const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

function showNext() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function showPrev() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

const title = document.getElementById('main-title');
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
      dropdown.addEventListener('mouseenter', () => {
        title.classList.add('hidden');
      });

      dropdown.addEventListener('mouseleave', () => {
        title.classList.remove('hidden');
      });
    });
// Slideshow automatico
setInterval(showNext, 5000);
