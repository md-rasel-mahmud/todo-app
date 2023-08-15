import { AiOutlineStar } from "react-icons/ai";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between">
      <div className="flex gap-2 items-center">
        <img src={logo} alt="logo" className="h-8" />{" "}
        <span className="font-bold text-xl text-gray-600">T O D O</span>
      </div>
      <button className="text-3xl focus:outline-none text-gray-600 hover:text-black">
        <AiOutlineStar />
      </button>
    </nav>
  );
};

export default Navbar;
