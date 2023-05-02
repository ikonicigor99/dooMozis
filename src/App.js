import React from "react";
import Navigation from "./navigation/Navigation";
import Header from "./components/Header/Header";
import HomePage from "./screens/HomePage/HomePage";
import AboutProducts from "./screens/AboutProducts/AboutProducts";
import Products from "./screens/Products/Products";
import { Contact } from "./screens/Contact/Contact";

function App() {
  return (
    <>
      <Header />
      <HomePage />
      <AboutProducts />
      <Products />
      <Contact />
    </>
  );
}

export default App;
