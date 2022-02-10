import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css'

function CartWidget () {
  return (
    <div>
      <FontAwesomeIcon icon={faShoppingCart} className="fa-lg cartIcon"/>
    </div>
  );
}

export default CartWidget;
