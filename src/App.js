import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Output from "./Pages/HobbyComponent";
import NFCReader from "./Components/NFCReader";
import { useSelector } from "react-redux";

const App = () => {
  const { userData } = useSelector((state) => state.userData);
  return (
    <div className="p-4">
      <BrowserRouter>
        <NFCReader>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/output" element={<Output />} />
            {userData.map((user) => (
              <Route
                path={`/habit/${user.id}`}
                element={<Output data={user} />}
                key={user.id}
              />
            ))}
          </Routes>
        </NFCReader>
      </BrowserRouter>
    </div>
  );
};

export default App;
