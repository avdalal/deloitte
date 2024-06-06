export default function decorate(block) {
    // Find all p elements in the block
    const  [stars, color] = [...block.querySelectorAll('p')];




        // Add a class to the rating based on its value
        stars.classList.add(`rating-value-${stars}`);
        color.classList.add(`rating-value-${color}`);
  
        // Add a data attribute to the rating with its value
        stars.setAttribute('data-rating', stars);
        color.setAttribute('data-rating', color);

  }