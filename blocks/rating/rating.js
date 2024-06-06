export default function decorate(block) {
    // Find all p elements in the block
    const ratings = [...block.querySelectorAll('p')];
  
    // Add a class to the block based on the number of ratings
    block.classList.add(`ratings-${ratings.length}-ratings`);
  
    // Setup rating values
    ratings.forEach((rating) => {
      const ratingValue = parseInt(rating.textContent, 10);
      if (ratingValue) {
        // Add a class to the rating based on its value
        rating.classList.add(`rating-value-${ratingValue}`);
  
        // Add a data attribute to the rating with its value
        rating.setAttribute('data-rating', ratingValue);
      }
    });
  }