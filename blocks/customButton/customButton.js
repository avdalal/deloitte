export default function decorate(block) {
    // Find all p elements in the block
    const  [buttonText, buttonColor, buttonRadius, buttonTextSize, buttonTextStyle, href, onclick] = [...block.querySelectorAll('p')]

    // Create a new button element
    const button = document.createElement('a'); 

    // Set the button's properties based on the p elements
    button.textContent = buttonText.textContent;
    button.style.backgroundColor = buttonColor.textContent;
    button.style.borderRadius = buttonRadius.textContent;
    button.style.fontSize = buttonTextSize.textContent;
    button.style.fontStyle = buttonTextStyle.textContent;

    // Check if href is not undefined before assigning
    button.href = href ? href.textContent : 'javascript:void(0)';

    // Check if onclick is not undefined before assigning
    button.onclick = onclick ? onclick.textContent : null;

    // Create a div element
    const div = document.createElement('div');

    // Add a class to the div
    div.classList.add('button-container');

    // Append the button to the div
    div.appendChild(button);

    // Remove the original p elements from the DOM
    [...block.children].forEach(child => child.remove());

    // Append the div to the block
    block.appendChild(div);
}