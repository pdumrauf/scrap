import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import { CartContext } from '../../context/CartContext';
import CartDetails from '../CartDetail/CartDetail';
import './Cart.css'

const Cart = ({title}) => {
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [emailConfirm, setEmailConfirm] = useState('')
    const [name, setName] = useState('');
    const [orderId, setOrderId] = useState('');
    const [loading, setLoading] = useState(false);
    const { cart, emptyCart, totalSum } = useContext(CartContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const newOrder = {
            date: new Date(),
            buyer: { email, name },
            items: cart,
            total: totalSum(),
        };
        addDoc(collection(db, 'orders'), newOrder)
            .then((res) => {
                setOrderId(res.id);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
                emptyCart();
            });
    };

    if (orderId !== '') {
        return (
            <>
                <h2>This is the ID of your order: {orderId}</h2>
                <Link to='/'> {'<<'} Back to home</Link>
            </>
        )
    }
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
                            <h3>Total: ${totalSum()}</h3>
                            <button className="btn-emptyCart" onClick={emptyCart}>Empty cart</button>
                        </div>
                        <div className='formContainer'>
                            <form onSubmit={handleSubmit} action="">
                                <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="name" />
                                <input onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} type="number" placeholder="phone number" />
                                <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="email" />
                                <input onChange={(e) => setEmailConfirm(e.target.value)} value={emailConfirm} type="email" placeholder="Confirm email" />
                                <div className='btnEndPurchaseContainer'>
                                    <button className='btn-buyItem' disabled={(name === '' | email === '' | phoneNumber === '' | (email !== emailConfirm))}>
                                        {
                                        loading
                                            ? 'Generating order....'
                                            : 'Finish your order'
                                        }
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </>
                )
            }
        </>
    );
};


export default Cart;