import React, { useState } from 'react';
import './Home.css';

import { useLoaderData } from 'react-router-dom';
import Tsharts from '../Tshart/Tsharts';
import Cart from '../Cart/Cart';
import toast from 'react-hot-toast';


const Home = () => {
const [cart, setCart] = useState([]);

const handleAddToCart = tshart => {
    const exists = cart.find(ts => ts._id === tshart.id);
    if(exists) {
      //  toast('you have already added this t-shart');
    }
    else {
        const newCart = [...cart, tshart];
        setCart(newCart)
    }
   
}
const handleRemoveFromCart = id =>{
   const remaining = cart.filter(ts => ts._id !== id);
   setCart(remaining)
}

    const tsharts = useLoaderData();
    return (
        <div className='home-container'>
          <div className='t-sharts-container'>
          {
            tsharts.map(tshart => <Tsharts
            key={tshart._id}
            tshart={tshart}
            handleAddToCart={handleAddToCart}
            ></Tsharts>)
          }
          </div>
            <div className="cart-container">
                <Cart
                cart={cart}
                handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;