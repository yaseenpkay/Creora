import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Content from "./pages/Content";
import Credit from "./pages/Credit";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="px-4 sm:px-10 md:px-14 lg-px-28 min-h-screen bg-gradient-to-b from-white to-green-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/purchase" element={<Credit />}></Route>
        <Route path="/content" element={<Content />}></Route>
      </Routes>
    </div>
  );
};

export default App;
