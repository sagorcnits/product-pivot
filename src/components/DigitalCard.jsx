import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const DigitalCard = ({ info }) => {
  const { localTheme } = useContext(AuthContext);
  return (
    <div className="box-shadow rounded-md p-4 cursor-pointer relative overflow-hidden digital-card hover:rotate-12 duration-500">
      <img className="w-[40%] block mx-auto" src={info.img} alt="" />
      <h1 className="text-center font-Inter font-bold pt-2 ">{info.title}</h1>
      <div
        className={`size-24 rounded-full effect duration-500 border-r-red-500 border-t-red-500  border-[30px] absolute -top-10 -right-9 ${
          localTheme == "light" ? "border-white" : "border-[#1D232A]"
        } `}
      ></div>
    </div>
  );
};

export default DigitalCard;
