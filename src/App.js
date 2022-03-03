import { Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart'
import CheckOut from './components/CheckOut/CheckOut'
import CartContextProvider from './context/CartContext';

function App() {
    return (
      <CartContextProvider>
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

            <Route
              path='/cart'
              element={<Cart title='These are your products. Checkout to finish your purchase!'/>} 
            />

            <Route 
              path='/checkout'
              element={<CheckOut title='Please, fill this form to finish your purchase'/>} 
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
      </CartContextProvider>
    ); 
};

export default App;
