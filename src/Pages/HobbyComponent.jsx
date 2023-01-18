import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import StreakMonitor from "../Components/StreakMonitor";
import PageWrapper from "../Components/PageWrapper";
import PageHeading from "../Components/PageHeading";
const HobbyComponent = ({ hobby }) => {
  // const { userData } = useSelector((state) => state.userData);
  // const { hobby: name, status, streak } = hobby;
  return (
    <PageWrapper>
      <div className="flex justify-between w-full items-center">
        <div className="flex gap-x-3 items-center">
          Icon
          <PageHeading title="Statistics" />
        </div>
        <div>delete</div>
      </div>
      <div>
        {/* <h1>{name}</h1> */}
        <h1>Ayush</h1>
        <img src="assets/streakCalendar.png" alt="" />
      </div>
    </PageWrapper>
  );
};

export default HobbyComponent;
