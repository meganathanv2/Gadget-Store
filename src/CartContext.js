import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id && item.selectedOption === product.selectedOption);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id && item.selectedOption === product.selectedOption
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const incrementQuantity = (productId, selectedOption) => {
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === productId && item.selectedOption === selectedOption
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrementQuantity = (productId, selectedOption) => {
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === productId && item.selectedOption === selectedOption
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  const removeFromCart = (productId, selectedOption) => {
    setCart((prevCart) =>
      prevCart.filter(item => !(item.id === productId && item.selectedOption === selectedOption))
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, incrementQuantity, decrementQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
