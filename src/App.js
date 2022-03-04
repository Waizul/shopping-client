import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import GlobalStyles from './globalStyles/globalStyles'
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import Navbar from "./components/navbar/Navbar";


function App() {
 const user = useSelector(state=>state.user.currentUser)
console.log(user)
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<SingleProduct/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/success' element={<Success/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
