import React from 'react';
import { Link } from 'react-router-dom';
import { Data } from '../Comman/Data';
import { useState } from 'react';
import './Header.css';

const Header = () => {
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(Data);

  const handlesearch = (e) => {
    const query = e.target.value;
    setSearch(query);
    setFilteredProducts(Data.filter((product) => {
      return product.name.toLowerCase().includes(query.toLowerCase());
    }));
  };

  return (
    <nav className='nav-container'>
      <div className='logo-container'>
        <img className='logo-img' src='data:image/jpeg;base64,...' alt='Logo'/>
        <p>GADGET</p><span>STORE</span>
      </div>
      <div className='search-container'>
        <input type='text' placeholder='Search...' className='search-bar' onChange={handlesearch} value={search}/>
      </div>
      <div className='productnames'>
        <ul>
          <li><Link to='/Airpods'>Airpods</Link></li>
          <li><Link to='/Speakers'>Speakers</Link></li>
          <li><Link to='/SmartWatchs'>Smart Watchs</Link></li>
          <li><Link to='/Chargers'>Chargers</Link></li>
          <li><Link to='/AllProducts'>All Products</Link></li>
        </ul>
      </div>
      <div className='cart-container'>
        <Link to='/cart'>
          <img className='cart-logo' src='https://cdn-icons-png.flaticon.com/128/833/833314.png' alt='Cart'/>
        </Link>
      </div>
      <div className='login-container'>
        <button className='login'><Link to='/login'>Login</Link></button>
      </div>
    </nav>
  );
}

export default Header;
