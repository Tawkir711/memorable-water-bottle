import React from 'react';
import './Cart.css'
import Bottle from '../Bottle/Bottle';

const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div className="card-container">
      <h4>Cart: {cart.length}</h4>
      <div>
        {cart.map((bottle) => (
          <div key={bottle.id}>
            <img src={bottle.img} alt="" />
            <button onClick={() => handleRemoveFromCart(bottle.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;