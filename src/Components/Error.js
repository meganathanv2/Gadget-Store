import React from 'react'
import { useRouteError } from 'react-router-dom';
import './Error.css';

const Error = () => {
    const err=useRouteError();
    
  return (
  <>
  {/* <h2>Opps!!</h2>
  <h3>Some thing went wrong</h3> */}
  <img className='error-container' src='https://colibriwp.com/blog/wp-content/uploads/2019/07/2488756.jpg' alt='Error'/>
  </>
  )
}

export default Error;