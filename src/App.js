import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
    return (
      <div>
        <NavBar />
        <Routes>
          <Route 
            path='/'
            element={<ItemListContainer greeting="This are all our products, check them out!" />}
          />

          <Route
            path='/category/:categoryName'
            element={<ItemListContainer greeting="Here are all the products in this category" />} 
          />

          <Route
            path='/product/:productId'
            element={<ItemDetailContainer />} 
          />

          {/* 404 page simulation */}
          <Route
            path='*'
            element={
              <div>
                <h2>There's nothing here!</h2>
                <Link to='/'> {'<<'} Back to home</Link>
              </div>
            }
          />

        </Routes>
      </div>
    ); 
};

export default App;
