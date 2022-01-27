import React, { useState } from 'react';
import washiTape from '../assets/img/washi-tape.png';
import './ItemCount.css';

function ItemCount({stock, initial, onAdd}) {
  const[counter, setCounter] = useState(initial);

  function increase() {
    if(counter < stock) {
      setCounter(counter + 1);
    } 
  }

  function decrease() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  function endPurchase() {
    onAdd();
    setCounter(initial);
  }
 
  return (
    <div className="card">
      <img src={washiTape} alt="washi-tape" className='imgProduct' />
      <div className='container'>
        <h4><b>6pcs Random Color Washi Tape</b></h4> 
        <p>$ 1.00</p> 
        <button onClick={decrease}>-</button>
        <button onClick={endPurchase}>Add to cart</button>
        <button onClick={increase}>+</button>
        <p>{counter}</p>
      </div>
    </div>
  );
};


export default ItemCount;