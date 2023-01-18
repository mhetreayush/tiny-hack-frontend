import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Output from "./Pages/HobbyComponent";
import NFCReader from "./Components/NFCReader";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import OnboardingWrapper from "./Components/OnboardingWrapper";
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
  const onboarding = [
    {
      title: "Track Your Goal",
      description: `Don't worry if you have trouble determining your goals, We can help you determine your goals and track your goals`,
      image: require("./assets/onboarding1.png"),
    },
    {
      title: "Track Your Goal",
      description: `Don't worry if you have trouble determining your goals, We can help you determine your goals and track your goals`,
      image: require("./assets/onboarding2.png"),
    },
    {
      title: "Track Your Goal",
      description: `Don't worry if you have trouble determining your goals, We can help you determine your goals and track your goals`,
      image: require("./assets/onboarding3.png"),
    },
    {
      title: "Track Your Goal",
      description: `Don't worry if you have trouble determining your goals, We can help you determine your goals and track your goals`,
      image: require("./assets/onboarding4.png"),
    },
  ];
  return (
    <div className="p-4">
      <BrowserRouter>
        <NFCReader>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/output" element={<Output />} />
            <Route path={`/habit/:_id`} element={<Output data={stats} />} />
            {onboarding.map((item, index) => (
              <Route
                path={`/onboarding/${index + 1}`}
                element={
                  <OnboardingWrapper
                    title={item.title}
                    image={item.image}
                    description={item.description}
                    index={index + 1}
                  />
                }
              />
            ))}
          </Routes>
        </NFCReader>
      </BrowserRouter>
    </div>
  );
};

export default App;
