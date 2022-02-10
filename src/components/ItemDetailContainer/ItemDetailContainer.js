import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../api/products";
import ItemDetail from '../ItemDetail/ItemDetail';


function ItemDetailContainer() {
    const [product , setProduct ] = useState([]);
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()
    
    useEffect(() => {
        getProducts
        .then((products) => {
            const product = products.find((p) => p.id === parseInt(productId));
            setProduct(product);
        })
        .finally(() => {
            setLoading(false)
        })
    }, [productId]);

    return (
        <>
            {loading ? (<h2>loading...</h2>) : (
                <ItemDetail product={product}/>
            )}
        </>
    )
}

export default ItemDetailContainer;