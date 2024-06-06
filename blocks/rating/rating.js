export default function decorate(block) {
    // Find all p elements in the block
    const ratings = [...block.querySelectorAll('p')];
  
    // Setup rating values and colors
    ratings.forEach((rating) => {
      const ratingValue = parseInt(rating.textContent, 10);
      if (ratingValue) {
        // Add a class to the rating based on its value
        rating.classList.add(`rating-value-${ratingValue}`);
  
        // Add a data attribute to the rating with its value
        rating.setAttribute('data-rating', ratingValue);
      } else {
        // If the rating value is not a number, treat it as a color
        const color = rating.textContent.trim().toLowerCase();
        if (color) {
          // Add a class to the rating based on its color
          rating.classList.add(`rating-color-${color}`);
  
          // Add a data attribute to the rating with its color
          rating.setAttribute('data-color', color);
        }
      }
    });
  }