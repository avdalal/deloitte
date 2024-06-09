export default function decorate(block) {
    // Find the div with the text "Click me"
    const buttonDiv = block.querySelector('.button-element-wrapper .button-element div div p');
    const  [buttonText, buttonColor, buttonRadius, buttonTextSize, buttonTextStyle, href, onclick] = [...block.querySelectorAll('p')];

    // Create a new button element
    const button = document.createElement('button');

    button.textContent = buttonDiv.textContent;
    button.style.backgroundColor = buttonColor.textContent;
    button.style.borderRadius = buttonRadius.textContent;
    button.style.fontSize = buttonTextSize.textContent;
    button.style.fontStyle = buttonTextStyle.textContent;

     // Check if href is not undefined before assigning
     button.href = href ? href.textContent : 'javascript:void(0)';

     // Check if onclick is not undefined before assigning
     button.onclick = onclick ? onclick.textContent : null;
     buttonColor.remove();
        buttonRadius.remove();
        buttonTextSize.remove();
        buttonTextStyle.remove();
        href.remove();
        onclick.remove();
    // Replace the div with the new button
    buttonDiv.parentNode.replaceChild(button, buttonDiv);
}