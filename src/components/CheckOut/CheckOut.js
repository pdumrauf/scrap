import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import { CartContext } from '../../context/CartContext';
import './CheckOut.css';

const CheckOut = ({title}) => {
    const { cart, emptyCart, totalSum } = useContext(CartContext);
    const [formValues, setFormValues] = useState({
        name: '',
        email: '', 
        phone: ''
    });
    const [orderId, setOrderId] = useState('');
    const [loading, setLoading] = useState(false);
        
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const itemCart = cart.map(({ id, title, price }) => {
            return { id, title, price }
        });

        const buyer = { 
            name: formValues.name, 
            email: formValues.email, 
            phone: formValues.phone 
        };

        const newOrder = {
            date: new Date(),
            buyer: buyer,
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

    const handleInputChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value})
    }
    
    const disableButton = () => {
        return formValues.name === '' || formValues.email === '' || formValues.phone === '' || (formValues.email !== formValues.emailConfirmed) 
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
                    <input onChange={handleInputChange} name='name' type="text" placeholder="name" />
                    <input onChange={handleInputChange} name='phone' type="number" placeholder="phone number" />
                    <input onChange={handleInputChange} name='email' type="email" placeholder="email" />
                    <input onChange={handleInputChange} name='emailConfirmed' type="email" placeholder="confirm your email" />
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