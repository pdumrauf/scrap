import ItemCount from './ItemCount.js'

function ItemListContainer ({greeting}) {

  function addItems(counter) {
    console.log('product added.')
  }

  return (
    <div>
      <h1>{greeting}</h1>
      <ItemCount stock={5} initial={1} onAdd={addItems} />
    </div>
  );
}

export default ItemListContainer;