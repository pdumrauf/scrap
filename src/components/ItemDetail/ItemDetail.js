import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ({product}) => {
    console.log(product)

    const [itemAmount, setItemAmount] = useState()

    function onAddItem(newItemCount) {
        setItemAmount(newItemCount)
        console.log(newItemCount)

    }

    return (
        <div className="itemContainer">
            <img src={product.img} alt={product.name} className="imgProduct"/>
            <div className="itemContainerDetails">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>$ {product.price}</p>
                {
                    !itemAmount ? <ItemCount stock={5} initial={1} onAdd={onAddItem}/> :
                    <Link to='/cart' className='btn-toCart'>Go to cart</Link>
                }
            </div>
        </div>
    )
};

export default ItemDetail;