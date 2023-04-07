import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/organisms/Login";
import Signup from "./components/organisms/Signup";
import Home from "./components/pages/Home";
import ProductGallary from "./components/pages/ProductGallary";
import ProductDetails from "./components/pages/ProductDetails";
import axios from "axios";
import ProductList from "./components/organisms/ProductList";
import Main from "./components/pages/Main";

import Cart from "./components/pages/Cart";
import WishlistPage from "./components/pages/Wishlist";
import Order from "./components/pages/Order";
import Invoice from "./components/pages/Invoice";

import MainNavbar from "./components/organisms/MainNavbar";

import OrderDetails from "./components/pages/ViewOrder";

export const axiosObject = axios.create({
  baseURL: "http://localhost:4000/api/",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/" element={<Main />}>
          <Route
            path="/productdetails/:id"
            element={<ProductDetails />}
          ></Route>
          <Route path="/home" element={<Home />} />
          <Route path="/productGallery" element={<ProductGallary />} />
          <Route path="/productGallery/:name" element={<ProductGallary />} />
          <Route path="/wishlist" element={<WishlistPage />}></Route>
          <Route path="/orders" element={<Order />}></Route>
          <Route path="/orders/Invoice" element={<Invoice />} />
          <Route path="/orders/view-order" element={<OrderDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route path="/wishlist" element={<WishlistPage />}></Route>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
