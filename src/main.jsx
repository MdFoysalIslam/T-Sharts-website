import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home.jsx';
import Main from './components/Layout/Main.jsx';
import OrderReview from './components/OrderReview/OrderReview.jsx';
import Grandpa from './components/Grandpa/Grandpa.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    children: [
      {
        path: '/',
        element: <Home/>,
        loader: ()=> fetch('tsharts.json')
      },
      {
        path: '/review',
        element: <OrderReview/>
      },
      {
        path: '/grandpa',
        element: <Grandpa/>
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
