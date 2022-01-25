import NavBar from './components/NavBar.js'
import ItemListContainer from './components/ItemListContainer.js'

function App() {
    return (
      <div>
        <NavBar />
        <ItemListContainer greeting="This are all our products, check them out!"/>
      </div>
    );
}

export default App;
