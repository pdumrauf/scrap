import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../context/CartContext';
import './CartWidget.css'

const CartWidget = () => {
  const { totalItems} = useContext(CartContext)
  return (
    <div>
      <FontAwesomeIcon icon={faShoppingCart} className="fa-lg cartIcon"/>
      <span>{totalItems()}</span>
    </div>
  );
}

export default CartWidget;
