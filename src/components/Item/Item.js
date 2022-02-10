import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({item}) => {
    return (
    <div>
        <Link to={`/product/${item.id}`}>
            <img src={item.img} alt={item.name} className="imgItem"/>
            <div>
                <h3>{item.name}</h3>
                <p>$ {item.price}</p>
            </div>
        </Link>
    </div>
    )
};

export default Item;