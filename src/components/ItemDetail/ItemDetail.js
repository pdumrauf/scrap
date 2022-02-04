const ItemDetail = ({product}) => {
    console.log(product)
    return (
        <div>
            <img src={product.img} alt={product.name} className="imgProduct"/>
            <div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>$ {product.price}</p>
            </div>
        </div>
    )
};

export default ItemDetail;