import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ filter, products }) => {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearch(query);
    filter(
      products.filter((product) => 
        product.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return (
    <nav className='nav-container'>
      <div className='logo-container'>
        <img className='logoic' src='https://i.pinimg.com/originals/e7/6a/76/e76a76c2b4b7de936c613010420b4112.png' alt='Logo' />
        <p className='logo-text'>GADGET<span>STORE</span></p>
      </div>
      <div className='search-container'>
        <input
          type='text'
          placeholder='Search...'
          className='search-bar'
          onChange={handleSearch}
          value={search}
        />
      </div>
      <div className='productnames'>
        <ul>
          <li><Link to='/Airpods'>Airpods</Link></li>
          <li><Link to='/Speakers'>Speakers</Link></li>
          <li><Link to='/SmartWatchs'>Smart Watches</Link></li>
          <li><Link to='/Chargers'>Chargers</Link></li>
          <li><Link to='/AllProducts'>All Products</Link></li>
        </ul>
      </div>
      <div className='cart-container'>
        <Link to='/cart'>
          <img
            className='cart-logo'
            src='https://cdn-icons-png.flaticon.com/128/833/833314.png'
            alt='Cart'
          />
        </Link>
      </div>
      <div className='login-container'>
        <button className='login'><Link to='/login'>Login</Link></button>
      </div>
    </nav>
  );
};

export default Header;
