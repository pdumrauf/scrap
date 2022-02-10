import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../api/products';
import ItemList from './ItemList/ItemList';



function ItemListContainer ({greeting}) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true)
  const { categoryName } = useParams()
  
  useEffect(() => {
    getProducts
    .then((response) => {
      if(!categoryName) {
        setItems(response)
      } else {
        const itemsByCategory = response.filter((item) => {
          return item.category === categoryName;
        })

        setItems(itemsByCategory)
      }
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      setLoading(false)
    })
  }, [categoryName]);


  return (
    <>
      {loading ? (<h2>Loading...</h2>
      ) : (
        <>
          <h1>{greeting}</h1>
          <ItemList items={items}/>
        </>
      )}
    </>
  );
}

export default ItemListContainer;