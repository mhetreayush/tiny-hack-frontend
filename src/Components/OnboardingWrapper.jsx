import { Link } from "react-router-dom";
import { GrFormNext } from "react-icons/gr";
const OnboardingWrapper = ({ title, image, description, index }) => {
  return (
    <div>
      <img src={image} />
      <div className="p-4">
        <h1 className="text-4xl font-semibold my-4">{title}</h1>
        <p className="my-2">{description}</p>
      </div>
      <Link
        to={index + 1 !== 4 ? `/onboarding/${index + 1}` : "/"}
        className="text-button fixed bottom-5 right-5 rounded-full p-2"
      >
        <GrFormNext size={50} />
      </Link>
    </div>
  );
};

export default OnboardingWrapper;
