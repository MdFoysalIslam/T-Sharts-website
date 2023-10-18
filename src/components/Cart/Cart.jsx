import React from 'react';
import './Cart.css';

const Cart = ({cart, handleRemoveFromCart}) => {
    let massage;
if(cart.length === 0) {
    massage = <p>Please Add Some Product</p>
}
else {
    massage = <h3>Thanks for purchase</h3>
}

    return (
        <div>
           <h1 className={cart.length !== 4 ? 'blue' : 'yellow'}> Order Samary: {cart.length}</h1>
           {cart.length > 2 ? <span>Aro kino</span> 
           : <span>Fokire</span>}
           {massage}
           {
            cart.map(tshart => <p 
                key={tshart._id}
                >
                    {tshart.name}<button
                    onClick={() => handleRemoveFromCart(tshart._id)}
                    >X</button></p>)

           }
           {
            cart.length === 2 && <p>Dabol Bonas</p>
           }
           {cart.length === 5 || <p>5 pcs hoy nay</p>}
        </div>
    );
};

export default Cart;

// condisional rendering.
//1. use if eles to set a variable that will contain an element, components
// 2. ternary operator: condition ? 'for true' : "false"
// 3. Logical && : if the condition is true then the next thing will be displayed
//  4. Logical || if the condition is false then the next thing will be displayed
