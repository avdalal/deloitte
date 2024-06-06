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
    console.log(href.textContent);
    //check if href is undefined
    if(typeof(href) != "undefined") {
        button.href = href.textContent;
    } else {
        button.href = 'javascript:void(0)';
    }

    // Remove the original p elements from the DOM
    [...block.querySelectorAll('p')].forEach(p => p.remove());

    // Add button class for additional styling
    button.classList.add('customButton');

    // Append the button to the block
    block.appendChild(button);
}