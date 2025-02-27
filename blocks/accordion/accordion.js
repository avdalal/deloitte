import { moveInstrumentation } from '../../scripts/scripts.js';

export default function transformToAccordion(block) {
  const accordion = document.createElement('div');
  accordion.className = 'accordion accordion-flush';
  accordion.id = 'accordionFlushdms';

  [...block.children].forEach((row, index) => {
    const item = document.createElement('div');
    item.className = 'accordion-item';
    moveInstrumentation(row, item);

    const header = document.createElement('h2');
    header.className = 'accordion-header';

    const button = document.createElement('button');
    button.className = 'accordion-button collapsed';
    button.type = 'button';
    button.dataset.bsToggle = 'collapse';
    button.dataset.bsTarget = `#flush-collapse${index + 1}`;
    button.ariaExpanded = 'false';
    button.ariaControls = `flush-collapse${index + 1}`;
    button.textContent = row.children[0].textContent; // Assuming the title is in the first child

    header.appendChild(button);

    const collapse = document.createElement('div');
    collapse.id = `flush-collapse${index + 1}`;
    collapse.className = 'accordion-collapse collapse';
    collapse.dataset.bsParent = '#accordionFlushdms';

    const body = document.createElement('div');
    body.className = 'accordion-body';
    body.innerHTML = row.children[1].innerHTML; // Assuming the content is in the second child

    collapse.appendChild(body);

    item.appendChild(header);
    item.appendChild(collapse);

    accordion.appendChild(item);
  });

  block.textContent = '';
  block.appendChild(accordion);

  document.querySelectorAll('.accordion-button').forEach((button) => {
    button.addEventListener('click', () => {
      const collapse = document.querySelector(button.dataset.bsTarget);

      if (button.classList.contains('collapsed')) {
        button.classList.remove('collapsed');
        button.setAttribute('aria-expanded', 'true');
        collapse.classList.remove('collapse');
        collapse.classList.add('collapsing');
        window.setTimeout(() => {
          collapse.classList.remove('collapsing');
          collapse.classList.add('show');
        }, 350); // Transition duration
      } else {
        button.classList.add('collapsed');
        button.setAttribute('aria-expanded', 'false');
        collapse.classList.remove('show');
        collapse.classList.add('collapsing');
        window.setTimeout(() => {
          collapse.classList.remove('collapsing');
          collapse.classList.add('collapse');
        }, 350); // Transition duration
      }
    });
  });
}
