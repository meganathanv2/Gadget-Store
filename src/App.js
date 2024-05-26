import React from 'react';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <CartProvider>
      <Header />
      <Body />
      <Footer />
    </CartProvider>
  );
}

export default App;
