import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Output from "./Pages/Output";
import NFCReader from "./componenets/NFCReader"

const App = () => {
  return (
    <div className="bg-[#EFEFE1] h-screen">
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
