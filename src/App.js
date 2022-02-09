import { GlobalStyles } from './GlobalStyles';
import Home from './pages/Home'
import Login from './pages/Login';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart'
function App() {
  return (
    <div>
      <GlobalStyles/>
      {/* <Home/> */}
      {/* <ProductList/> */}
      {/* <SingleProduct/> */}
      {/* <Register /> */}
      {/* <Login /> */}
      <Cart/>
    </div>
  );
}

export default App;
