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
    button.onclick = onclick.textContent;
    console.log(href.textContent);
    //check if href is undefined
    if(typeof(href) != "undefined") {
        button.href = href.textContent;
    } else {
        button.href = 'javascript:void(0)';
    }

    // Create a div element
    const div = document.createElement('div');
    // Create a div element
    const p = document.createElement('p');

    // Add a class to the div
    div.classList.add('button-container');

    // Append the button to the div
    p.appendChild(button);
    // Append the button to the div
    div.appendChild(p);

    // Remove the original p elements from the DOM
    [...block.children].forEach(div => div.remove());

    // Append the div to the block
    block.appendChild(div);
}