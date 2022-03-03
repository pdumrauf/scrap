import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import { CartContext } from '../../context/CartContext';
import './CheckOut.css'

const CheckOut = ({title}) => {
    const { cart, emptyCart, totalSum } = useContext(CartContext)
    const [formValue, setFormValue] = useState({
        name: '',
        phone: '',
        email: '',
        emailConfirmed: ''
    })
    const [orderId, setOrderId] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const itemCart = cart.map(({ id, title, price }) => {
            return { id, title, price }
        });

        const newOrder = {
            date: new Date(),
            buyer: formValue,
            items: itemCart,
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

    const handleNameChange = (e) => {
        setFormValue({
            ...formValue,
            name: e.target.value
        })
    };

    const handlePhoneChange = (e) => {
        setFormValue({
            ...formValue,
            phone: e.target.value
        })
    };

    const handleEmailChange = (e) => {
        setFormValue({
            ...formValue,
            email: e.target.value
        })
    };
    
    const handleConfirmedEmailChange = (e) => {
        setFormValue({
            ...formValue,
            emailConfirmed: e.target.value
        })
    };
    
    const disableButton = () => {
        return (formValue.name === '' || formValue.email === '' || formValue.phone === '') || (formValue.email !== formValue.emailConfirmed) 
    };

    if (orderId !== '') {
        return (
            <>
                <h2>This is the ID of your order: {orderId}</h2>
                <Link to='/'> {'<<'} Back to home</Link>
            </>
        )
    };

    return (
        <>
            <h1 className="checkOutTitle">{title}</h1>
            <div className='formContainer'>
                <form onSubmit={handleSubmit} action="">
                    <input onChange={handleNameChange} type="text" placeholder="name" />
                    <input onChange={handlePhoneChange} type="number" placeholder="phone number" />
                    <input onChange={handleEmailChange} type="email" placeholder="email" />
                    <input onChange={handleConfirmedEmailChange} type="email" placeholder="Confirm email" />
                    <div className='btnEndPurchaseContainer'>
                        <button className='btn-buyItem' disabled={disableButton()}>
                            {
                            loading
                                ? 'Generating order....'
                                : 'Finish your order'
                            }
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CheckOut;