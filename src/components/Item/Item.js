import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({item}) => {
    return (
    <div>
        <Link to={`/product/${item.id}`}>
            <img src={item.pictureUrl} alt={item.title} className="imgItem"/>
            <div>
                <h3>{item.title}</h3>
                <p>$ {item.price}</p>
            </div>
        </Link>
    </div>
    )
};

export default Item;