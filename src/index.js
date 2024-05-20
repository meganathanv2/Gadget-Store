import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Login from './Components/Login';
import Error from './Components/Error';
import Body from './Components/Body';
import GadgetDetails from './Components/GadgetDetails';
import SignUp from './Components/SignUp';
import Uploading from './Components/Uploading';

const root = ReactDOM.createRoot(document.getElementById('root'));
const approuter =createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path:'/',
        element:<Body/>
      }
    ]
   
  },
 {
  path:'/AllProducts',
  element:<Body/>
 },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/gadgets/:id',
    element:<GadgetDetails/>
  },
  {
    path:'/SignUp',
    element:<SignUp/>
  }
  ,{
    path:'/upload',
    element:<Uploading/>
  }
])
root.render(
 <RouterProvider router={approuter}></RouterProvider>
);


