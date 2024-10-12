import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

// Pages
import Home from "./app/pages/Home";
import LoginPage from "./app/pages/LoginPage";
import CartPage from "./app/pages/CartPage";
import Checkout from "./app/pages/Checkout";
import ProductDetailPage from "./app/pages/ProductDetailPage";
import ForgotPassword from "./features/auth/ForgotPassword";
import Search from "./app/pages/Search";
import PagenotFound from "./app/pages/PagenotFound";
import Orderpage from "./app/pages/Orderpage";
import RegisterPage from "./app/pages/RegisterPage";
import Dashboard from "./app/pages/Admin/Dashboard";
import CreateCategory from "./app/pages/Admin/CreateCategory";
import CreateProduct from "./app/pages/Admin/CreateProduct";

// Routes
import PrivateRoute from "./app/components/Routes/PrivateRoute";
import PublicRoute from "./app/components/Routes/PublicRoute";
import ContactPage from "./app/pages/ContactPage";
import ServicePage from "./app/pages/ServicePage";
import AllProductPage from "./app/pages/AllProductPage";

function App() {
  return (
    <Routes>
      {/* Private routes */}
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/create-category" element={<CreateCategory />} />
        <Route path="/dashboard/create-product" element={<CreateProduct />} />
        <Route path="/YourOrder" element={<Orderpage />} />
        <Route path="/Checkout" element={<Checkout />} />
      </Route>

      {/* Public routes */}
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
      </Route>

      {/* Other routes */}
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/services" element={<ServicePage />} />
      <Route path="/products/:slug" element={<AllProductPage/>}/>
      <Route path="*" element={<PagenotFound />} />
      <Route path="/search" element={<Search />} />
      <Route path="/product-detail/:id" element={<ProductDetailPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
}

export default App;
