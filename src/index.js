import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Components/Login';
import Error from './Components/Error';
import Body from './Components/Body';
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
        path: 'cart',
        element: <Cart />,
      },
      // {
      //   path: 'product-detail',
      //   element: <ProductDetail product={sampleProduct} addToCart={(item) => console.log(item)} />,
      // },
  {
    path:'/body',
    element:<Body/>
  },{
    path:"/upload",
    element:<Uploading/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
