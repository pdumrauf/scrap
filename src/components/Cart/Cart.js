import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import CartDetails from '../CartDetail/CartDetail';
import './Cart.css'

const Cart = ({title}) => {
    const { cart, emptyCart, totalSum } = useContext(CartContext)

    return (
        <>
            {cart.length === 0 ? (
                <>
                    <h2>You haven't added any products yet.</h2>
                    <Link to='/'> {'<<'} Back to home</Link>
                </>
            ) : (
                <>
                    <>
                        <h1 className="cartTitle">{title}</h1>
                        {cart.map((product) => (<CartDetails product={product} key={product.id} />))}
                    </>
                    <div className='cartContainer'>
                        <div className="buttonCartContainer">
                            <span className='totalSum'>Total: ${totalSum()}</span>
                            <button className="btn-emptyCart" onClick={emptyCart}>Empty cart</button>
                            <Link to='/checkout' className='btn-checkOut'>Checkout</Link>
                        </div>
                    </div>
                </>
                )
            }
        </>
    );
};


export default Cart;