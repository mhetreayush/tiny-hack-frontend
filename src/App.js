import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Output from "./Pages/Output";
import NFCReader from "./Components/NFCReader";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div className="bg-[#EFEFE1] min-h-screen p-4">
      <Navbar />
      <BrowserRouter>
        <NFCReader>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/output" element={<Output />} />
          </Routes>
        </NFCReader>
      </BrowserRouter>
    </div>
  );
};

export default App;
