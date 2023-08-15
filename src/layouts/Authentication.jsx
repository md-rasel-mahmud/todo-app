import { Outlet } from "react-router-dom";

import logo from "../assets/logo.png";

const Authentication = () => {
  return (
    <>
      <nav className="p-3 flex items-center gap-2 font-semibold text-xl text-gray-600">
        <img src={logo} className="h-8" alt="logo" />
        <h2>TODO APP</h2>
      </nav>
      <header className="flex flex-col items-center justify-center py-10 md:min-h-[80vh]">
        <Outlet />
      </header>
    </>
  );
};

export default Authentication;
