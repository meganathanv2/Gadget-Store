import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './Components/Login';
import Error from './Components/Error';
import Body from './Components/Body';
import SignUp from './Components/SignUp';
import Uploading from './Components/Uploading';
import Cart from './Components/Cart';
import CartProvider from './CartContext';
import Checkout from './Components/Checkout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/uploading',
    element: <Uploading />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/body',
    element: <Body />,
  },
  {
    path: '/upload',
    element: <Uploading />,
  },
  {
    path:'/user/dashboard',
    element:<App />,
  }
  ,{
    path:'/checkout',
    element:<Checkout />,
  }
  ,{
    path:'/AllProducts',
    element:<App />,
  },
  ,{
    path:'/chargers',
    element:<App />,
  },
  ,{
    path:'/Speakers',
    element:<App />,
  }
  ,{
    path:'/SmartWatchs',
    element:<App />,
  }
  ,{
    path:"/Airpods",
    element:<App/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <RouterProvider router={router} />
  </CartProvider>
);
