import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { setUserData } from "../redux/userData";
import { useDispatch } from "react-redux";
import ScannerComponent from "../HelperFunctions/nfcReader";
import PageHeading from "../Components/PageHeading";
import PageWrapper from "../Components/PageWrapper";
const Home = () => {
  const { userData } = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(userData);
  });
  //   setName("Home");
  return (
    <PageWrapper>
      <PageHeading title="What habits do you want to incorporate?" />
      <div className="grid grid-cols-2 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <div key={item} className="col-span-1">
            <Link to={`/habit/${item}`}>
              <img
                src="/assets/hobbies/hobby1.png"
                className="h-full w-full"
                alt="habit"
              />
            </Link>
          </div>
        ))}
      </div>
      <div className="rounded-full fixed bottom-10 w-3/4 text-center font-semibold text-xl self-center p-4 text-white bg-button">
        Continue
      </div>
    </PageWrapper>
  );
};

export default Home;
