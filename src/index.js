import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Components/Login';
import Error from './Components/Error';
import SignUp from './Components/SignUp';
import Uploading from './Components/Uploading';
import Cart from './Components/Cart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
  },
  {
     path:'/user/dashboard',
     element:<App />,
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'signup',
    element: <SignUp />,
  },
  {
    path: 'uploading',
    element: <Uploading />,
  },
  {
      path:'upload',
      element:<Uploading />,
  },
  {
    path: 'cart',
    element: <Cart />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
