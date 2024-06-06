export default function decorate(block) {
    // Find all p elements in the block
    const  [stars, color] = [...block.querySelectorAll('p')];

    // Get the text content of the stars and color elements
    const starsValue = stars.textContent;
    const colorValue = color.textContent;



    // Add a class to the stars element based on its value
    stars.classList.add(`rating-value-${starsValue}`);

    // Add a data attribute to the stars element with its value
    stars.setAttribute('data-rating', starsValue);

    // Set a CSS variable on the stars element with the color value
    stars.style.setProperty('--star-color', colorValue);
    stars.style.setProperty('--rating', starsValue);

    color.remove();

}