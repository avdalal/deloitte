export default function decorate(block) {
  const slides = Array.from(block.children);

  slides.forEach((slide, i) => {
    slide.className = `carousel-item ${i === 0 ? ' carousel-item--active' : ''}`;
    slide.id = `item-${i}`;

    Array.from(slide.children).forEach((div, index) => {
      if (index === 0 && div.querySelector('picture')) {
        div.className = 'carousel-item__bg';
      } else {
        div.className = 'carousel-item__fg';
      }
    });
    const [alt, isFullWidth] = slide.querySelectorAll('.carousel-item__fg');
    if (isFullWidth.textContent === 'yes') {
      block.parentElement.parentElement.classList.add('carousel-container--full-width');
    }
    if (alt) {
      block.querySelector('.carousel-item__bg').querySelector('img').alt = alt.textContent;
    }
    isFullWidth.remove();
    alt.remove();
  });

  let slideIndex = 0;

  function showSlide(n) {
    slides.forEach((slide, index) => {
      if (index === n) {
        slide.classList.add('carousel-item--active');
      } else {
        slide.classList.remove('carousel-item--active');
      }
    });
  }

  function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  }

  function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
  }

  // Create navigation div
  const navigationDiv = document.createElement('div');
  navigationDiv.className = 'carousel__navigation';

  const nextButton = document.createElement('button');
  nextButton.className = 'carousel__navigation-btn carousel__navigation-btn--right';
  nextButton.addEventListener('click', nextSlide);

  const prevButton = document.createElement('button');
  prevButton.className = 'carousel__navigation-btn carousel__navigation-btn--left';
  prevButton.addEventListener('click', prevSlide);

  navigationDiv.appendChild(prevButton);
  navigationDiv.appendChild(nextButton);

  // Append navigation div to block
  block.appendChild(navigationDiv);

  // Show the first slide
  showSlide(slideIndex);

  // Change slide every 5 seconds
  setInterval(nextSlide, 5000);
}
