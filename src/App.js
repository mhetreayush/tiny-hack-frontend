import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Output from "./Pages/HobbyComponent";
import NFCReader from "./Components/NFCReader";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
const App = () => {
  const { userData } = useSelector((state) => state.userData);
  const [stats, setStats] = useState([]);
  useEffect(() => {
    async function getStats() {
      const stats = await axios.get(
        "https://acm-tinyhack-backend-production-ff47.up.railway.app/habit/stats/" +
          "63c7c7a600c42e2ce1367e22"
      );

      console.log(stats);
      setStats(stats.data);
    }
    getStats();
  }, []);
  return (
    <div className="p-4">
      <BrowserRouter>
        {/* <NFCReader> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/output" element={<Output />} />
          {userData.map((user) => (
            <Route
              path={`/habit/${user.id}`}
              element={<Output data={stats} />}
              key={user.id}
            />
          ))}
        </Routes>
        {/* </NFCReader> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
