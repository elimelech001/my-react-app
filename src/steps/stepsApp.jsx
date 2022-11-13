import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import React, { useState } from "react";
import Home from "./pages/home";
import Product from "./pages/product";
import Layout from "./tabs/Layout";
import About from "./pages/about";
import NoPage from "./pages/noPage";
import SingleProduct from "./pages/SingleProduct";
import LogIn from "./pages/logIn";
import ProtectedRoute from "./pages/protectedRoute";
import Dashboard from "./pages/dashboard";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="product/:productID" element={<SingleProduct />} />
          <Route path="about" element={<About />} />
          <Route path="logIn" element={<LogIn setUser={setUser} />} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
