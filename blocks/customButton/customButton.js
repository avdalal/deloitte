export default function decorate(block) {
    // Find all p elements in the block
    const  [buttonText, buttonColor, buttonRadius, buttonTextSize, buttonTextStyle, href, onclick] = [...block.querySelectorAll('p')].map(p => p.textContent);

    // Create a new button element
    const button = document.createElement('a'); 

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

    buttonText.remove();
    buttonColor.remove();
    buttonRadius.remove();;
    buttonTextSize.remove();;
    buttonTextStyle.remove();;
    href.remove();;
    onclick.remove();;

    // Add button class for additional styling
    button.classList.add('customButton');

   
    block.appendChild(button);
}