import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';

function App() {
    return (
      <div>
        <NavBar />
        {/*<ItemListContainer greeting="This are all our products, check them out!"/>*/}
        <ItemDetailContainer />
      </div>
    );
}

export default App;
