import React, { useState } from 'react';
import './ItemCount.css';

function ItemCount({ stock, initial }) {
  const[counter, setCounter] = useState(initial);

  const add = () => {
    counter < stock && setCounter(counter + 1);
  } ;

  const substract = () => {
    counter > 0 && setCounter(counter - 1);
  };

  const addToCart = () => {
    console.log(`${counter} products added to your cart.`);
    setCounter(initial);
  };
 
  return (
    <div className="card">
      <div className='container'>
        <div className='container-add-substract'>
          <button onClick={substract}>-</button>
          <p>{counter}</p>
          <button onClick={add}>+</button>
        </div>
        <button 
          disabled={counter === 0}
          className={counter === 0 ? 'disabled' : 'add'} 
          onClick={addToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ItemCount;