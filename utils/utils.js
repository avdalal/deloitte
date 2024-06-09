export default function decorate(block, elementType = 'button') {
    const pElements = [...block.querySelectorAll('p')];

    const [text, color, radius, textSize, textStyle, href, onclick] = pElements;

    const element = document.createElement(elementType);
    element.textContent = text.textContent;
    element.style.backgroundColor = color.textContent;
    element.style.borderRadius = `${radius.textContent}px`;
    element.style.fontSize = `${textSize.textContent}px`;
    element.style.fontWeight = textStyle.textContent;

    if (href && isValidURL(href.textContent)) {
        element.onclick = () => window.open(href.textContent, '_blank');
    }

    if (onclick) {
        element.onclick = new Function(onclick.textContent);
    }

    pElements.forEach(p => p.parentNode.parentNode.remove());

    block.appendChild(element);
}

function isValidURL(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;  
    }
}