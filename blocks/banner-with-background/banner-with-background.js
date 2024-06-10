export default function decorate(block) {
    const [title, type, subTitle, backgroundColor, href] = block.children;


    block.style.backgroundColor = backgroundColor.textContent.trim();
    
    const bannerDiv = document.createElement('div');

    // Create link
    const link = document.createElement('a');
    link.href = href.textContent.trim();
    link.style.textDecoration = 'none';
    link.target = '_self';
    bannerDiv.appendChild(link);

    // Create title element
    const titleElement = document.createElement(type.textContent.trim());
    titleElement.className = 'banner-with-background__title';
    titleElement.textContent = title.textContent;
    link.appendChild(titleElement);

    // Create p
    const p = document.createElement('p');
    p.className = 'banner-with-background__sub-title';
    p.textContent = subTitle.textContent;
    link.appendChild(p);

    // Replace block with the new structure
    block.innerHTML = '';
   block.appendChild(bannerDiv);

}