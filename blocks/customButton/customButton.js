export default function decorate(block) {
    // Find all p elements in the block
    const  [buttonText, buttonColor] = [...block.querySelectorAll('p')];

    // Get the text content of the buttonText and buttonColor elements
    const buttonTextValue = buttonText.textContent;
    const buttonColorValue = buttonColor.textContent;

    // Add a class to the buttonText element based on its value
    buttonText.classList.add(`button-value-${buttonTextValue}`);

    // Add a data attribute to the buttonText element with its value
    buttonText.setAttribute('data-button', buttonTextValue);

    // Set a CSS variable on the buttonText element with the color value
    buttonText.style.setProperty('--button-color', buttonColorValue);
    buttonText.style.setProperty('--button', buttonTextValue);

    // Remove all other elements
    [...block.children].forEach(child => {
        if (child !== buttonText) {
            child.remove();
        }
    });
}