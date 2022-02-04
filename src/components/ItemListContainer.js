/*import ItemCount from './ItemCount.js';*/
import React, { useEffect, useState } from 'react';
import { getProducts } from '../api/products';
import ItemList from './ItemList/ItemList';
import ItemCount from './ItemCount/ItemCount';

function ItemListContainer ({greeting}) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    getProducts
    .then((response) => {
      setItems(response)
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      setLoading(false)
    })
  }, []);


  return (
    <>
      {loading ? (<h2>Loading...</h2>
      ) : (
        <>
          <h1>{greeting}</h1>
          <ItemList items={items}/>
          <ItemCount stock={5} initial={1} />
        </>
      )}
    </>
  );
}

export default ItemListContainer;