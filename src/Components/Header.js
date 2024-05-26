import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <nav className='nav-container'>
      <div className='logo-container'>
        <img className='logo-img' src='data:image/png;base64,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' alt='logo' />
      </div>
      <div className='input-wrapper'>
        <input type='text' placeholder='Search here...' value={search} onChange={handleSearch} />
      </div>
      <ul className='nav-list'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/body'>Products</Link></li>
        <li><Link to='/cart'>Cart</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/signup'>Signup</Link></li>
        <li><Link to='/uploading'>Upload</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
