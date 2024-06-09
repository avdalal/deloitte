import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
    const slides = block.children;

    for (let i = 0; i < slides.length; i++) {
        const slide = slides[i];
        slide.className = `slide-${i}`;

        [...slide.children].forEach((div) => {
            if (div.children.length === 1 && div.querySelector('picture')) div.className = 'slide-image';
            else div.className = 'slide-body';
        });

        slide.querySelectorAll('picture > img').forEach((img) => {
            const optimizedPic = createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]);
            moveInstrumentation(img, optimizedPic.querySelector('img'));
            img.closest('picture').replaceWith(optimizedPic);
        });
    }
}