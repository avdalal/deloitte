export default function decorate(block) {
    // Find all p elements in the block
    const  [buttonText, buttonColor, buttonRadius, buttonTextSize, buttonTextStyle, href, onclick] = [...block.querySelectorAll('p')].map(p => p.textContent);

    // Create a new button element
    const button = document.createElement('a'); // Using 'a' to allow href

    // Set the button's properties based on the p elements
    button.textContent = buttonText;
    button.style.backgroundColor = buttonColor;
    button.style.borderRadius = buttonRadius;
    button.style.fontSize = buttonTextSize;
    button.style.fontWeight = buttonTextStyle === 'Bold' ? 'bold' : 'normal';
    console.log(href);
    //check if href is undefined
    if(typeof(href) != "undefined") {
        button.href = href;
    } else {
        button.href = 'javascript:void(0)';
    }



    // Add button class for additional styling
    button.classList.add('customButton');

    // Replace the block's content with the new button
    while (block.firstChild) {
        block.firstChild.remove();
    }
    block.appendChild(button);
}