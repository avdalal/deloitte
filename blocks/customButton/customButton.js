export default function decorate(block) {
    // Find all p elements in the block
    const  [buttonText, buttonColor, buttonRadius, buttonTextSize, buttonTextStyle, href, onclick] = [...block.querySelectorAll('p')].map(p => p.textContent);


    // Remove the original p elements from the DOM
    [...block.querySelectorAll('p')].forEach(p => p.remove());

    // Add button class for additional styling
    button.classList.add('customButton');

    // Append the button to the block
    block.appendChild(button);
}