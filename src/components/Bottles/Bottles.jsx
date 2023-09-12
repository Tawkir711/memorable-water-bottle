import React, { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css';
import { addToLS, getStoredCart, removeFromLS } from '../../utilities/localstorage';
import Cart from '../cart/Cart';
const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('bottles.json')
    .then(res => res.json())
    .then(data => setBottles(data))
  }, [])
  
  useEffect(() => {
    console.log( 'called the useEffect', bottles.length);
    if (bottles.length) {
      const storedCart = getStoredCart();
      console.log(storedCart, bottles);
      const savedCart = [];
      for (const id of storedCart) {
        console.log(id);
        const bottle = bottles.find(bottle => bottle.id === id);
        if (bottle) {
          savedCart.push(bottle);
        }
      }
      console.log('save cart', savedCart);
      setCart(savedCart);

    }
  }, [bottles]) 

  const handleAddToCart = bottle => {
    // console.log(bottle);
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToLS(bottle.id);
  }

  const handleRemoveFromCart = id => {
    // visual cart remove
    const remainingCart = cart.filter(bottle => bottle.id !== id);
    setCart(remainingCart);
    // remove from store LS
    removeFromLS(id);
  }

  return (
    <div>
      <h2>Bottles Available: {bottles.length} </h2>
      <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      <div className="bottle-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            handleAddToCart={handleAddToCart}
            bottle={bottle}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;