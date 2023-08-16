import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ModalToggle from "../context/ModalToggle";

//import Aos
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const App = () => {
  //useEffect
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <ModalToggle>
        <Sidebar />
        <div className="p-4 sm:ml-64">
          {/* navbar */}
          <Navbar />

          {/* content here  */}
          <Outlet />
        </div>
      </ModalToggle>
    </>
  );
};

export default App;
