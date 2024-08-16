import { HashLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="loader">
      <HashLoader size={50} color={"#ac09a3"} loading={true} />
    </div>
  );
};

export default Loader;
