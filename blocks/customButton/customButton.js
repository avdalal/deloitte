export default function decorate(block) {
    // Find all p elements in the block
    const  [buttonText, buttonColor, buttonRadius, buttonTextSize, buttonTextStyle, href, onclick] = [...block.querySelectorAll('p')]

    // Create a new button element
    const button = document.createElement('a'); 

    buttonText.remove();

    // Add button class for additional styling
    button.classList.add('customButton');

    // Append the button to the block
    block.appendChild(button);
}