import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import './CartWidget.css'
import { CartContext } from '../../context/CartContext';

function CartWidget () {
  const { totalItems} = useContext(CartContext)
  return (
    <div>
      <FontAwesomeIcon icon={faShoppingCart} className="fa-lg cartIcon"/>
      <span>{totalItems()}</span>
    </div>
  );
}

export default CartWidget;
