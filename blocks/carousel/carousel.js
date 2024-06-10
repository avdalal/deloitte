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
    });
}