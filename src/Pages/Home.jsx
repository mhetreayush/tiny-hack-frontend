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
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import Navbar from "../Components/Navbar";
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
    <>
      <Navbar />
      <PageWrapper>
        <CustomModal modalOn={modalOn} setModalOn={setModalOn}>
          <div>Hi</div>
        </CustomModal>

        <div>
          {userData.length === 0 && <div>No Data</div>}
          {Children.toArray(
            userData?.map((data) => {
              return (
                <Link to={`habit/${data.id}`}>
                  <div className="rounded-md p-4 bg-[#F0E0FF]">
                    <h1 className="text-xl mb-6 font-medium">{data.hobby}</h1>
                    <div className="flex w-full justify-between items-center text-sm">
                      <div>
                        Status:{" "}
                        <span className="text-[#905DE6]">{data.status}</span>
                      </div>
                      <div className="flex gap-x-3 items-center">
                        <AiOutlineHeart size={15} />
                        <span className="text-[#905DE6] flex items-center">
                          {data.streak}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })
          )}
        </div>
        <div
          onClick={() => setModalOn(true)}
          className="text-button fixed bottom-5 right-5"
        >
          <BsFillPlusCircleFill size={50} />
        </div>
      </PageWrapper>
    </>
  );
};

export default Home;
