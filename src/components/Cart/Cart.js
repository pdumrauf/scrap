import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartDetails from '../CartDetail/CartDetail';
import './Cart.css'

const Cart = ({title}) => {
    const { cart, emptyCart, totalSum } = useContext(CartContext)

    return (
        <>
            {cart.length === 0 ? (
                <div>
                    <h2>You haven't added any products yet.</h2>
                    <Link to='/'> {'<<'} Back to home</Link>
                </div>
            ) : (
                <div>
                    <div>
                        <h1 className="cartTitle">{title}</h1>
                        {cart.map((product) => (<CartDetails product={product} key={product.id} />))}
                    </div>
                    <div className="buttonCartContainer">
                        <p>Total: ${totalSum()}</p>
                        <button className="btn-emptyCart" onClick={emptyCart}>Empty cart</button>
                    </div>
                </div>
                )
            }
        </>
    );
};


export default Cart;