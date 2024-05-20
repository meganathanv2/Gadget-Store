 import './Header.css'
 import { useState } from 'react';
 import { Data } from '../Comman/Data';
import { Link } from 'react-router-dom';

 const Header = () => {
    const [search, setSearch] = useState('')
    const [filteredProducts, setFilteredProducts] = useState(Data);
    const handlesearch = (e) => {
           const query=e.target.value;
           setSearch(query);
           const datafilt= setFilteredProducts(Data.filter((product) => {
               return product.name.toLowerCase().includes(query.toLowerCase());
           }));
    }
 

  return (
 <nav className='nav-container'>
    <div className='logo-container'>
        <img className='logo-img' src='data:image/jpeg;base64,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' alt='Logo'/>
        <p>GADGET</p><span>STORE</span>
    </div>
    <div className='search-container'>
        <input  type='text' placeholder='Search...' className='search-bar' onChange={handlesearch} value={search}/>
          
    </div>
    <div className='productnames'>
        <ul>
             <li>
               <Link to='/Airpods'>Airpods</Link> 
            </li>
            <li>
               <Link to='/Speakers'>Speakers</Link> 
            </li>
            <li>
               <Link to='/SmartWatchs'>Smart Watchs</Link> 
            </li>
            <li>
               <Link to='/Chargers'>Chargers</Link> 
            </li>
            <li>
               <Link to='/AllProducts'>All Products</Link> 
            </li>
            
            
        </ul>
        {/* <Link to="/Airpods">Airpods</Link>
        <Link to="/Speakers">Speakers</Link>
        <Link to="/SmartWatchs">SmartWatchs</Link>
        <Link to="/Chargers">Chargers</Link>
        <Link to="/AllProducts">All Products</Link> */}
    </div>
    <div className='cart-container'>
        <img className='cart-logo' src='https://cdn-icons-png.flaticon.com/128/833/833314.png' alt='Cart'/>
    </div>
    <div className='login-container'>
        <button className='login'><Link to='/login'>Login</Link></button>
    </div>
 </nav>
  )
}
export default Header;
