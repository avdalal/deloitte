export default function decorate(block) {
    const slides = Array.from(block.children);

    slides.forEach((slide, i) => {
        slide.className = `imageslider__slide imageslider__slide--${i}${i === 0 ? ' imageslider__slide--active' : ''}`;

        Array.from(slide.children).forEach((div, index) => {
            if (index === 0 && div.querySelector('picture')) {
                div.className = 'imageslider__bg';
            } else {
                div.className = 'imageslider__fg';
            }
        });
    });

    

    let slideIndex = 0;

    function showSlide(n) {
        slides.forEach((slide, index) => {
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
    block.appendChild(navigationDiv);

    // Show the first slide
    showSlide(slideIndex);


    // Change slide every 5 seconds
    setInterval(nextSlide, 5000);
}