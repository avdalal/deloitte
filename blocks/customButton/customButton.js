export default function decorate(block) {
    // Find all p elements in the block
    const  [buttonText, buttonRadius, buttonTextSize, buttonTextStyle, href, onclick] = [...block.querySelectorAll('p')];

    // Get the text content of the elements
    const buttonTextValue = buttonText.textContent;
    const buttonRadiusValue = buttonRadius.textContent;
    const buttonTextSizeValue = buttonTextSize.textContent;
    const buttonTextStyleValue = buttonTextStyle.textContent;
    const hrefValue = href.textContent;
    const onclickValue = onclick.textContent;

    // Create a new button element
    const button = document.createElement('a'); // Using 'a' to allow href
    console.log("here");
    // Set the button's properties based on the p elements
    button.textContent = buttonTextValue;
    button.style.borderRadius = buttonRadiusValue;
    button.style.fontSize = buttonTextSizeValue;
    button.style.fontWeight = buttonTextStyleValue === 'Bold' ? 'bold' : 'normal';
    button.href = hrefValue; // Set href to the value from the block

    // Add onclick event listener
    button.addEventListener('click', function() {
        eval(onclickValue); // Execute the onclick code from the block
    });

    // Add button class for additional styling
    button.classList.add('customButton');

    // Replace the block's content with the new button
    while (block.firstChild) {
        block.firstChild.remove();
    }
    block.appendChild(button);

    // Remove the original p elements from the DOM
    buttonText.remove();
    buttonRadius.remove();
    buttonTextSize.remove();
    buttonTextStyle.remove();
    href.remove();
    onclick.remove();
}