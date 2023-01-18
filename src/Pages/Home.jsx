import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { setUserData } from "../redux/userData";
import { useDispatch } from "react-redux";
import ScannerComponent from "../HelperFunctions/nfcReader";
const Home = () => {
  const { userData } = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(userData);
  });
  //   setName("Home");
  return (
    <div>
      <div>Home</div>
      <button
        onClick={() => dispatch(setUserData({ ...userData, name: "Ayush" }))}
      >
        Set
      </button>
      <Link to="/output">Output</Link>
      <ScannerComponent />
    </div>
  );
};

export default Home;
