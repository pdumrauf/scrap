import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({product}) => {
    const [showButton, setShowButton] = useState(false);
    const {addToCart} = useContext(CartContext);

    const onAdd = (amount) => {
        setShowButton(true)
        addToCart(product, amount);
    }

    return (
        <div className="itemContainer">
            <img src={product.img} alt={product.name} className="imgProduct"/>
            <div className="itemContainerDetails">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>$ {product.price}</p>
                {
                    !showButton ? <ItemCount stock={product.stock} initial={1} onAdd={onAdd}/> :
                    <Link to='/cart' className='btn-toCart'>Go to cart</Link>
                }
            </div>
        </div>
    )
};

export default ItemDetail;