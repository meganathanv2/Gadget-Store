import React from 'react'
import { useRouteError } from 'react-router-dom';
import './Error.css';

const Error = () => {
    const err=useRouteError();
    
  return (
  <>
  {/* <h2>Opps!!</h2>
  <h3>Some thing went wrong</h3> */}
  <img className='error-container' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Nz7OhucycbtPl95tLeaYDWA9a7IkNc7aHLT4klfOi7B447M7q7nwLMZKeQ&s' alt='Error'/>
  </>
  )
}

export default Error;