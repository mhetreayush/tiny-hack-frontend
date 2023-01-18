import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Output from "./Pages/Output";
const App = () => {
  return (
    <div className="bg-[#EFEFE1] h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/output" element={<Output />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
