import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDocs, getFirestore, collection, query, where } from 'firebase/firestore'
import ItemList from './ItemList/ItemList';
import './ItemListContainer.css'


function ItemListContainer ({greeting}) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true)
  const { categoryName } = useParams()
  
  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, 'items');
    
    const q = !categoryName ? itemsCollection 
      : query(
      itemsCollection, 
      where('category','==', categoryName)
      );

      getDocs(q)
        .then((snapshot) => {
          setItems(snapshot.docs.map((doc)=> ({ id: doc.id, ...doc.data() })));
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            setLoading(false);
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