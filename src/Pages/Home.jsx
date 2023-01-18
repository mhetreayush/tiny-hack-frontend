import { Children, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { setUserData } from "../redux/userData";
import { useDispatch } from "react-redux";
import ScannerComponent from "../HelperFunctions/nfcReader";
import PageHeading from "../Components/PageHeading";
import PageWrapper from "../Components/PageWrapper";
import CustomModal from "../Components/CustomModal";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { useState } from "react";
const Home = () => {
  const { userData } = useSelector((state) => state.userData);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(userData);
  });
  const [modalOn, setModalOn] = useState(false);
  //   setName("Home");
  return (
    <PageWrapper>
      <CustomModal modalOn={modalOn} setModalOn={setModalOn}>
        <div>Hi</div>
      </CustomModal>
      <div
        onClick={() => setModalOn(true)}
        className="text-button fixed bottom-5 right-5"
      >
        <BsFillPlusCircleFill size={50} />
      </div>
    </PageWrapper>
  );
};

export default Home;
