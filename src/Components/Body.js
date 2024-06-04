import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Body.css';
import { CartContext } from '../CartContext';

const Body = ({ products }) => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate('/cart');
  };

  return (
    <div className="product-cart">
      {products.map((product) => (
        <div key={product._id} className="product-item">
          <img src={product.imageUrl} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Body;
