import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import { getProducts } from "../../api/products";
import ItemDetail from '../ItemDetail/ItemDetail';
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase'


function ItemDetailContainer() {
    const [product , setProduct ] = useState([]);
    const [loading, setLoading] = useState(true);
    const { productId } = useParams();
    
   useEffect(() => {

        const itemRef = doc(db, 'items', productId);
        
        getDoc(itemRef)
        .then((snapshot) => {

            if (snapshot.exists()) {
                setProduct({id: snapshot.id, ...snapshot.data()});
            }
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            setLoading(false);
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