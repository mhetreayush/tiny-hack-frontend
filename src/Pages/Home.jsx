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
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const [hobbies, setHobbies] = useState([]);
  const { username } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    async function getHobbeies() {
      const response = await axios.get(
        "https://acm-tinyhack-backend-production-ff47.up.railway.app/habit/" +
          username
      );
      console.log(response);
      setHobbies(response.data);
    }
    getHobbeies();
  }, []);

  const [modalOn, setModalOn] = useState(false);

  return (
    <>
      <Navbar />
      <PageWrapper>
        <CustomModal modalOn={modalOn} setModalOn={setModalOn}>
          <div className="my-4 gap-y-4 flex flex-col p-4">
            <div>
              <h1>Enter habit</h1>
            </div>
            <div>
              <input type="text" className="border-b w-full border-black" />
            </div>
            <div className="self-end">
              <button
                className="rounded-full p-2 bg-purple-600  text-white"
                onClick={() => setModalOn(false)}
              >
                Submit
              </button>
            </div>
          </div>
        </CustomModal>

        <div>
          {hobbies.length === 0 && <div>No Data</div>}
          {Children.toArray(
            hobbies?.map((data) => {
              return (
                <div
                  className="rounded-md p-4 bg-[#F0E0FF] m-4"
                  onClick={() => {
                    window.location.replace(
                      window.location.href.split("user")[0] +
                        `habit/${data._id}`
                    );
                  }}
                >
                  <h1 className="text-xl mb-6 font-medium">{data.name}</h1>
                  <div className="flex w-full justify-between items-center text-sm">
                    <div>
                      Status:{" "}
                      <span className="text-[#905DE6]">
                        {data.status || "Pending"}
                      </span>
                    </div>
                    <div className="flex gap-x-3 items-center">
                      <AiOutlineHeart size={15} />
                      <span className="text-[#905DE6] flex items-center">
                        {data.streak}
                      </span>
                    </div>
                  </div>
                </div>
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
