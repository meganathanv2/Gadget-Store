import React, { useState } from 'react';
import './Uploating.css';

const Uploading = () => {
      const [imageUrl, setImageUrl] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Image URL:', imageUrl);
    console.log('Price:', price);
    console.log('Rating:', rating);
    // Here you can add the logic to handle the form submission, e.g., sending data to an API
  };
  return (
  
    <div className="upload-container">
      <h2>Upload Cart Details</h2>
      <form onSubmit={handleSubmit} className="upload-form">
        <div className="form-group">
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="text"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="1"
            max="5"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Uploading