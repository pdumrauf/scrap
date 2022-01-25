import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

function CartWidget () {
  return (
    <>
      <FontAwesomeIcon icon={faShoppingCart} className="fa-lg"/>
      <span>0</span>
    </>
  );
}

export default CartWidget;
