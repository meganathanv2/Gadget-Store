import React, { useState } from 'react';
import './ProductDetail.css';

const ProductDetail = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState('');

  const handleQuantityChange = (delta) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + delta));
  };

  const handleAddToCart = () => {
    if (selectedOption) {
      addToCart({ ...product, quantity, selectedOption });
    } else {
      alert('Please choose an option.');
    }
  };

  return (
    <div className="product-detail-container">
      <div className="product-image">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="product-price">
          ₹{product.priceRange.min} - ₹{product.priceRange.max}
        </p>
        <div className="product-rating">
          <span className="stars">⭐⭐⭐⭐</span>
          <span>({product.reviews} customer reviews)</span>
        </div>
        <div className="product-options">
          <label htmlFor="options">ANC</label>
          <select
            id="options"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="">Choose an option</option>
            {product.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="product-quantity">
          <button onClick={() => handleQuantityChange(-1)}>-</button>
          <input type="text" value={quantity} readOnly />
          <button onClick={() => handleQuantityChange(1)}>+</button>
        </div>
        <button
          className="add-to-cart-button"
          onClick={handleAddToCart}
          disabled={!selectedOption}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
