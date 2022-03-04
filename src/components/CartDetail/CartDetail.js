import { useContext } from 'react';
import { CartContext } from "../../context/CartContext";
import CartDetailItem from '../CartDetailItem/CartDetailItem'

const CartDetail = ({hasActions}) => {
    const { cart } = useContext(CartContext)

    return ( 
        <>
            {cart.map((product) => (<CartDetailItem product={product} hasActions={hasActions} key={product.id} />))}
        </>
    )
}

export default CartDetail;