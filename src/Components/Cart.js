import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { cart, incrementQuantity, decrementQuantity, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div className="cart-item" key={`${item.id}-${item.selectedOption}`}>
            <img src={item.imageUrl} alt={item.name} />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>Option: {item.selectedOption}</p>
              <p>Price: ₹{item.price}</p>
              <div className="quantity-control">
                <button onClick={() => decrementQuantity(item.id, item.selectedOption)} disabled={item.quantity === 1}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => incrementQuantity(item.id, item.selectedOption)}>+</button>
              </div>
              <button onClick={() => removeFromCart(item.id, item.selectedOption)}>Remove</button>
            </div>
          </div>
        ))
      )}
      <div className="total-amount">
        <h3>Total: ₹{totalAmount.toFixed(2)}</h3>
      </div>
      <button className="checkout-button" onClick={() => navigate('/checkout')}>Proceed to Checkout</button>
    </div>
  );
};

export default Cart;
