import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({product}) => {
    console.log(product)
    return (
        <div className="itemContainer">
            <img src={product.img} alt={product.name} className="imgProduct"/>
            <div className="itemContainerDetails">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>$ {product.price}</p>
                <ItemCount stock={5} initial={1} />
            </div>
        </div>
    )
};

export default ItemDetail;