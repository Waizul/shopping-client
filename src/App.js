import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import GlobalStyles from "./globalStyles/globalStyles";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import SingleProduct from "./pages/singleProduct/SingleProduct";
import Cart from "./pages/cart/Cart";
import Success from "./pages/Success";
import Navbar from "./components/navbar/Navbar";
import Payment from "./pages/Payment";
import Admin from "./pages/admin/Admin";
import AdminRoute from "./pages/admin/AdminRoute";
import PrivateRoute from "./pages/user/privateRoute";
import AddProduct from "./pages/admin/AddProduct";
import UpdateProduct from "./pages/admin/UpdateProduct";
import RemoveProduct from "./pages/admin/RemoveProduct";
import MakeAdmin from "./pages/admin/MakeAdmin";

function App() {
  const user = useSelector((state) => state.user?.currentUser);
  console.log(user);
  const admin = true;

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/payment"
          element={
            <PrivateRoute>
              <Payment />
            </PrivateRoute>
          }
        />
         <Route
          path="/admin"
          element={
            <AdminRoute>
              <Admin />
            </AdminRoute>
          }
        >
        <Route
          path="/admin/add"
          element={
            <AdminRoute>
              <AddProduct />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/update"
          element={
            <AdminRoute>
              <UpdateProduct />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/remove"
          element={
            <AdminRoute>
              <RemoveProduct />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/make"
          element={
            <AdminRoute>
              <MakeAdmin />
            </AdminRoute>
          }
        />
</Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/success" element={<Success />} />
        <Route path="/admin" element={admin && <Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
