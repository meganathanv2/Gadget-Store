import React from 'react';
import { Link } from 'react-router-dom';
import { Data } from '../Comman/Data';
import Productcart from './Productcart';
import './Body.css';

const Body = () => {
  return (
    <div className='product-cart'>
      {Data.map((product) => {
        return (
          <Link key={product.id} to={`/gadgets/${product.id}`}>
            <Productcart product={product} />
          </Link>
        );
      })}
    </div>
  );
}

export default Body;
