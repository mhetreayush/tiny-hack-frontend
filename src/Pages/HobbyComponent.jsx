import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import StreakMonitor from "../Components/StreakMonitor";
import PageWrapper from "../Components/PageWrapper";
import PageHeading from "../Components/PageHeading";
import streakCalendar from "../assets/streakCalendar.png";
import { AiOutlineHeart } from "react-icons/ai";
import axios from "axios";
import userData from "../redux/userData";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { IoIosArrowBack } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
const StreakDiv = ({ value, text }) => {
  return (
    <div className="bg-[#F0E0FF] p-5 rounded-md flex flex-col gap-y-2">
      <div>
        <AiOutlineHeart size={20} />
      </div>
      <div className="text-4xl font-semibold">{value}</div>
      <div className="text-sm">{text}</div>
    </div>
  );
};

const HobbyComponent = () => {
  const { userData } = useSelector((state) => state.userData);
  const { _id } = useParams();
  const [hobby, setHobby] = useState({ streak: 0 });
  useEffect(() => {
    async function getStats() {
      const stats = await axios.get(
        "https://acm-tinyhack-backend-production-ff47.up.railway.app/habit/stats/" +
          _id
      );
      setHobby(stats.data);
    }
    getStats();
  }, [hobby]);

  return (
    <PageWrapper>
      <div className="flex justify-between w-full items-center">
        <div className="flex gap-x-3 items-center">
          <Link to="/">
            <IoIosArrowBack size={20} />
          </Link>
          <PageHeading title="Statistics" />
        </div>
        <div>
          <FiTrash2 />
        </div>
      </div>
      <div>
        {/* <h1>{name}</h1> */}
        <h1 className="text-4xl mb-4 font-semibold text-gray-700">Gym</h1>
        <img src={streakCalendar} alt="" />
      </div>
      <div className="grid grid-cols-2 gap-x-4">
        <StreakDiv value={hobby.streak} text="Streaks Completed" />
        <StreakDiv value={hobby.streak} text="Maximum Streak" />
      </div>
      <div>
        <h1>Yearly Statistics</h1>
        <div className="w-full my-4">
          <StreakMonitor />
          {/* <img src={require("../assets/yearlyStats.png")} /> */}
        </div>
      </div>
    </PageWrapper>
  );
};

export default HobbyComponent;
