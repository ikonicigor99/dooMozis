import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AboutProducts from "../screens/AboutProducts/AboutProducts";
import HomePage from "../screens/HomePage/HomePage";
const Navigation = () => {
  const location = useLocation();
  return (
    <>
      {/* <Routes location={location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/staRadimo" element={<AboutProducts />} />
      </Routes> */}
    </>
  );
};

export default Navigation;
