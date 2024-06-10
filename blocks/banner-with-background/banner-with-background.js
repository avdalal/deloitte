export default function decorate(block) {
    const slides = Array.from(block.children);

    slides.forEach((slide, i) => {
        // Create new elements
        const wrapper = document.createElement('div');
        const bannerLink = document.createElement('a');
        const titleElement = document.createElement('h3');
        const subTitleElement = document.createElement('span');

        // Get the title, subtitle, and background color from the slide
        const [title, h1, subTitle, color] = slide.querySelectorAll('p');

        // Set the class names and styles
        wrapper.className = 'pensionManageCenter';
        bannerLink.className = 'pensionManageBanner centeredContentWidth';
        bannerLink.href = '#'; // replace with actual link
        bannerLink.style.backgroundColor = color.textContent;
        titleElement.style.color = '#ffffff';
        subTitleElement.style.color = '#ffffff';

        // Set the text content
        titleElement.textContent = title.textContent;
        subTitleElement.textContent = subTitle.textContent;

        // Append the title and subtitle to the banner link
        bannerLink.appendChild(titleElement);
        bannerLink.appendChild(subTitleElement);

        // Append the banner link to the wrapper
        wrapper.appendChild(bannerLink);

        // Replace the slide with the wrapper
        slide.parentNode.replaceChild(wrapper, slide);
    });
}