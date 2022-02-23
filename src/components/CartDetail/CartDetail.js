import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import './CartDetail.css'

const CartDetail = ({product}) => {
    const { deleteItem } = useContext(CartContext)
    
    return (
        <div>
            <h1>{product.title}</h1>
            <img src={product.pictureUrl} alt={product.title} className="imgItem"/>
            <p>{product.description}</p>
            <p>Qty: {product.amount}</p>
            <p>${product.price * product.amount}</p>
            <div>
                <button className="btn-deleteItem" onClick={() => deleteItem(product.id)}>X</button>
                <button className="btn-buyItem">Buy</button>
            </div>
        </div>
    )
}

export default CartDetail;