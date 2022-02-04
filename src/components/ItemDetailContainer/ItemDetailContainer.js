import { useEffect, useState } from "react";
import { getProducts } from "../../api/products";
import ItemDetail from '../ItemDetail/ItemDetail' 

function ItemDetailContainer() {
    const [product , setProduct ] = useState([]);
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        getProducts
        .then((products) => {
            const product = products.find((p) => p.id === 2);
            setProduct(product);
        })
        .finally(() => {
            setLoading(false)
        })
    }, []);

    return (
        <>
            {loading ? ('') : (
                <ItemDetail product={product}/>
            )}
        </>
    )
}

export default ItemDetailContainer;