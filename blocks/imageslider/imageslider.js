export default function decorate(block) {
    block.className = 'block slider';
    const slides = Array.from(block.children);

    slides.forEach((slide, i) => {
        slide.className = `slider__slide slider__slide--${i}${i === 0 ? ' slider__slide--active' : ''}`;

        Array.from(slide.children).forEach((div, index) => {
            if (index === 0 && div.querySelector('picture')) {
                div.className = 'slider__bg';
            } else {
                div.className = 'slider__fg';
            }
        });
    });

    

    let slideIndex = 0;

    function showSlide(n) {
        slides.forEach((slide, index) => {
            slide.style.display = index === n ? 'block' : 'none';
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
    navigationDiv.className = 'slider__navigation';

    // Create next and prev buttons
    const nextButton = document.createElement('button');
    nextButton.className = 'slider__navigation-btn slider__navigation-btn--right';
    nextButton.addEventListener('click', nextSlide);

    const prevButton = document.createElement('button');
    prevButton.className = 'slider__navigation-btn slider__navigation-btn--left';
    prevButton.addEventListener('click', prevSlide);

    // Append buttons to navigation div
    navigationDiv.appendChild(prevButton);
    navigationDiv.appendChild(nextButton);

    // Append navigation div to block
    block.appendChild(navigationDiv);

    // Show the first slide
    showSlide(slideIndex);

    const lastSlide = slides[slides.length - 1];
    console.log(lastSlide);

    // Change slide every 5 seconds
    setInterval(nextSlide, 5000);
}