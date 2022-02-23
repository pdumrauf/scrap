import { getDocs, collection } from 'firebase/firestore'
import { db } from '../firebase'

const getProducts = async (resolve, reject) => {

  const itemsCollection = collection(db, 'items');

  const snapshot = await getDocs(itemsCollection);
  const products = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
  resolve(products);
  reject('Error');

};

export { getProducts };