import React, { useState, useEffect } from 'react';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  const updateQuantity = (index, delta) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity = Math.max(1, updatedCartItems[index].quantity + delta);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const removeFromCart = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const proceedToCheckout = () => {
    alert('Proceeding to checkout!');
    // Implement checkout functionality here
  };

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="empty-cart">No items in cart</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <h3>{item.name}</h3>
            <p>Option: {item.selectedOption}</p>
            <p>Price: ₹{item.price}</p>
            <div className="cart-quantity">
              <button onClick={() => updateQuantity(index, -1)} className="quantity-button">-</button>
              <input type="text" value={item.quantity} readOnly className="quantity-input" />
              <button onClick={() => updateQuantity(index, 1)} className="quantity-button">+</button>
            </div>
            <button onClick={() => removeFromCart(index)} className="remove-button">Remove</button>
          </div>
        ))
      )}
      {cartItems.length > 0 && (
        <button onClick={proceedToCheckout} className="checkout-button">
          Proceed to Checkout
        </button>
      )}
    </div>
  );
};

export default Cart;
