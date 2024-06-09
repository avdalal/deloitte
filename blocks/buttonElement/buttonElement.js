export default function decorate(block) {
    // Find the div with the text "Click me"
    const buttonDiv = block.querySelector('.button-element-wrapper .button-element div div p');

    // Create a new button element
    const button = document.createElement('button');
    button.textContent = buttonDiv.textContent;

    // Replace the div with the new button
    buttonDiv.parentNode.replaceChild(button, buttonDiv);
}