import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import './CartDetailItem.css'

const CartDetailItem = ({product, hasActions}) => {
    const { deleteItem } = useContext(CartContext)
    
    return (
        <div>
            <h1 className='productTitleCart'>{product.title}</h1>
            <img src={product.pictureUrl} alt={product.title} className="imgItem"/>
            <p>{product.description}</p>
            <p>Qty: {product.amount}</p>
            <p>${product.price * product.amount}</p>
            {
                hasActions && (
                    <div>
                        <button className="btn-deleteItem" onClick={() => deleteItem(product.id)}>X</button>
                    </div>
                )
            }
        </div>
    )
}

export default CartDetailItem;