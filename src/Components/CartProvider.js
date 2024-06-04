import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(item => item.id === product.id && item.selectedOption === product.selectedOption);
      if (existingProductIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += product.quantity;
        return updatedCart;
      }
      return [...prevCart, { ...product }];
    });
  };

  const incrementQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 } : item
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
