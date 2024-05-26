import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const updateQuantity = (product, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === product.id && item.selectedOption === product.selectedOption
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeFromCart = (product) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) => !(item.id === product.id && item.selectedOption === product.selectedOption)
      )
    );
  };

  const proceedToCheckout = () => {
    console.log('Proceeding to checkout with items:', cartItems);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, updateQuantity, removeFromCart, proceedToCheckout }}
    >
      {children}
    </CartContext.Provider>
  );
};
