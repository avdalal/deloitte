export default function decorate(block) {
    const [title, type, subTitle, backgroundColor, href] = block.children;


    block.style.backgroundColor = backgroundColor.textContent.trim();
    

    // Create link
    const link = document.createElement('a');
    link.href = href.textContent.trim();
    link.style.textDecoration = 'none';
    link.target = '_self';


    // Create title element
    title.className = 'banner-with-background__title';
    link.textContent = title.textContent;
    title.children[0].innerHTML = '';
    title.children[0].appendChild(link);
   // title.appendChild(link);

    // Create p

    subTitle.className = 'banner-with-background__sub-title';
    link.textContent = subTitle.textContent;
    // subTitle.appendChild(link);

    type.remove();
    backgroundColor.remove();
    href.remove();

}