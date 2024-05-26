import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Body.css';

const Body = () => {
  const [Products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products/');
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const addToCart = (product) => {
    setCartItems((prevCartItems) => {
      const updatedCart = [...prevCartItems, { ...product, quantity: 1 }];
      localStorage.setItem('cartItems', JSON.stringify(updatedCart)); // Save cart items to localStorage
      return updatedCart;
    });
    navigate('/cart'); // Navigate to cart page
  };

  return (
    <div className="product-cart">
      {Products.map((product) => (
        <div key={product._id} className="product-item">
          <img src={product.imageUrl} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Body;
