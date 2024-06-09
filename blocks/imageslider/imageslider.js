export default function decorate(block) {
    block.className = 'block slider';
    const slides = block.children;

    for (let i = 0; i < slides.length; i++) {
        const slide = slides[i];
        slide.className = `slide-${i}${i === 0 ? ' slide--active' : ''}`;

        [...slide.children].forEach((div, index) => {
            if (index === 0 && div.querySelector('picture')) {
                div.className = 'bg';
            } else {
                div.className = 'fg';
            }
        });
    }
}