import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Output = () => {
  const { userData } = useSelector((state) => state.userData);
  return (
    <div>
      <div>name: {userData.name}</div>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Output;
