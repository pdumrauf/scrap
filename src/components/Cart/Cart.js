import { Link } from 'react-router-dom';
function Cart({title}) {
    return(
        <div>
            <h1>{title}</h1>
            <Link to='/'> {'<<'} Back to home</Link>
        </div>
    )
}


export default Cart;