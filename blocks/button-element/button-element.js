function isValidURL(string) {
  try {
    // eslint-disable-next-line no-new
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
}

export default function decorate(block) {
  const pElements = [...block.querySelectorAll('p')];
  // eslint-disable-next-line max-len
  const [buttonText, buttonColor, buttonRadius, buttonTextSize, buttonTextStyle, href, onclick] = pElements;

  const button = document.createElement('button');
  button.textContent = buttonText.textContent;
  button.style.backgroundColor = buttonColor.textContent;
  button.style.borderRadius = `${buttonRadius.textContent}px`;
  button.style.fontSize = `${buttonTextSize.textContent}px`;
  button.style.fontWeight = buttonTextStyle.textContent;

  if (href && isValidURL(href.textContent)) {
    button.onclick = () => window.open(href.textContent, '_blank');
  }

  if (onclick) {
    button.onclick = new Function(onclick.textContent);
  }

  pElements.forEach((p) => p.parentNode.parentNode.remove());

  block.appendChild(button);
}
