import React from 'react';
import './Productcart.css';

const Productcart = ({ product }) => {
  const { name, price, rating, imageUrl } = product;
  return (
   
    <div className="product-container">
      <img className="product-img" src={imageUrl} alt={name} />
      <div className="product-details">
        <h3>{name}</h3>
        <p>Price: ${price}</p>
        <p>Rating: {rating}</p>
      </div>
      <button className="add-to-cart">Add to Cart</button>
    </div>

  );
}

export default Productcart;
