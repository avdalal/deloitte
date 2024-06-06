export default function decorate(block) {
    // Find all p elements in the block
    const  [fontSize, textAlign, fontWeight, buttonText] = block.children;
    const fontSizeValue = fontSize.textContent;
    fontSize.classList.add(`rating-value-${fontSizeValue}`);
    // Create a new button element
    const button = document.createElement('button');

    // Set the button's properties based on the p elements
    button.style.fontSize = fontSize;
    button.style.textAlign = textAlign;
    button.style.fontWeight = fontWeight === 'Bold' ? 'bold' : 'normal';
    button.textContent = buttonText;

    // Replace the block's content with the new button
    while (block.firstChild) {
        block.firstChild.remove();
    }
    block.appendChild(button);
}