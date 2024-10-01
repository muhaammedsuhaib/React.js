import React, { useState } from 'react';

const Rating = () => {
  const [rating, setRating] = useState(0); // Store the selected rating
  const [hover, setHover] = useState(0); // Store the hover state

  return (
    <div>
      <div style={styles.container}>
        {[...Array(5)].map((star, index) => {
          const currentRating = index + 1; // Rating from 1 to 5

          return (
            <div
              key={index}
              style={{
                ...styles.star,
                color: currentRating <= (hover || rating) ? '#ffc107' : '#e4e5e9', // Change color based on hover/rating
              }}
              onClick={() => setRating(currentRating)} // Set rating on click
              onMouseEnter={() => setHover(currentRating)} // Set hover state
              onMouseLeave={() => setHover(0)} // Reset hover state
            >
              &#9733; {/* Star symbol */}
            </div>
          );
        })}
      </div>
      <p>Your rating: {rating || 'None'}</p>
    </div>
  );
};

// Basic CSS styles using JS objects
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  star: {
    fontSize: '30px', // Size of the star
    transition: 'color 200ms', // Smooth transition when hovering over stars
  },
};

export default Rating;