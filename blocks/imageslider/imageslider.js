export default function decorate(block) {
    const slides = Array.from(block.children);
    const ul = document.createElement('ul');
    ul.className = 'imageslider';
  
    slides.forEach((slide, i) => {
      const li = document.createElement('li');
      li.className = `imageslider__slide ${i === 0 ? ' imageslider__slide--active' : ''}`;
      li.id = `slide-${i}`;
  
      while (slide.firstElementChild) li.append(slide.firstElementChild);
  
      Array.from(li.children).forEach((div, index) => {
        if (index === 0 && div.querySelector('picture')) {
          div.className = 'imageslider__bg';
        } else {
          div.className = 'imageslider__fg';
        }
      });
  
      ul.append(li);
    });
  
    let slideIndex = 0;
  
    function showSlide(n) {
      Array.from(ul.children).forEach((slide, index) => {
        if (index === n) {
          slide.classList.add('imageslider__slide--active');
        } else {
          slide.classList.remove('imageslider__slide--active');
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
    navigationDiv.className = 'imageslider__navigation';
  
    const nextButton = document.createElement('button');
    nextButton.className = 'imageslider__navigation-btn imageslider__navigation-btn--right';
    nextButton.addEventListener('click', nextSlide);
  
    const prevButton = document.createElement('button');
    prevButton.className = 'imageslider__navigation-btn imageslider__navigation-btn--left';
    prevButton.addEventListener('click', prevSlide);
  
    navigationDiv.appendChild(prevButton);
    navigationDiv.appendChild(nextButton);
  
    // Append navigation div to block
    block.textContent = '';
    block.append(ul);
    block.append(navigationDiv);
  
    // Show the first slide
    showSlide(slideIndex);
  
    // Change slide every 5 seconds
    setInterval(nextSlide, 5000);
  }