import { BsSquareFill } from "react-icons/bs";
const StreakMonitor = ({ data }) => {
  const hundredArray = Array.from(Array(100).keys());
  console.log(hundredArray);
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        gridTemplateColumns: "repeat(auto-fill, minmax(30px,1fr))",
        gridGap: "0.25rem",
      }}
      className=" p-4 rounded-md w-full border-[#905DE6] border-2"
    >
      {hundredArray.map((item) => {
        return (
          <div className="w-1/10">
            {item % 8 === 0 ? (
              <BsSquareFill color="#EBEDF0" size={20} />
            ) : (
              <BsSquareFill color="#40C463" size={20} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StreakMonitor;
