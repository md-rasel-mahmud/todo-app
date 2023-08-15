import { HiOutlineDocumentText } from "react-icons/hi";
import { FaEdit, FaPlus, FaPlusCircle, FaTrash } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ModalContext } from "../context/ModalToggle";
import Accordion from "./Accordion";

const Sidebar = () => {
  const { setIsModal } = useContext(ModalContext);
  const taskList = [
    {
      todoTitle: "getting start",
      taskTitle: "subtitle",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ipsum delectus, totam non neque libero voluptatibus. Debitis fugiat explicabo quaerat.",
    },
    {
      todoTitle: "getting start",
      taskTitle: "subtitle",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ipsum delectus, totam non neque libero voluptatibus. Debitis fugiat explicabo quaerat.",
    },
    {
      todoTitle: "getting start",
      taskTitle: "subtitle",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ipsum delectus, totam non neque libero voluptatibus. Debitis fugiat explicabo quaerat.",
    },
  ];
  return (
    <aside
      id="separator-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      {/* sidebar  */}
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 ">
        <Link
          to="/"
          className="flex items-center p-2 font-bold text-gray-900 rounded-lg hover:bg-gray-100  group"
        >
          <img
            className="w-5 h-5 rounded transition duration-75"
            src="https://lh3.googleusercontent.com/a/AAcHTtdRKU4nOLn52zXAxQ9rXsusEYUhvaMGskYaSDCr2nzEBNU=s100"
            alt="profile"
            referrerPolicy="no-referrer"
          />
          <span className="ml-3">Rasel Mahmud</span>
        </Link>
        <ul className="space-y-2 font-medium ml-2">
          <li>
            <button
              onClick={() => setIsModal(true)}
              className="flex items-center gap-2 p-1 text-gray-500 rounded-lg hover:bg-gray-100 group w-full focus:outline-none active:bg-white"
            >
              <FaPlusCircle /> New page
            </button>
          </li>

          {/* Favorite list  */}
          <li>
            <small className="text-gray-400">Favorite</small>
          </li>

          {/* sidebar list  */}
          {taskList.map((item, index) => (
            <Accordion
              key={index}
              id={index + 1}
              todoTitle="Section 2"
              taskTitle="This is the content of section 2."
            />
          ))}
          <li className="group">
            <Link className="flex items-center p-1 text-gray-600 rounded-lg hover:bg-gray-100 group">
              <span>
                <IoIosArrowForward />
              </span>
              <HiOutlineDocumentText />

              <span className="ml-1">Getting Start</span>

              {/* action  */}
              <div className="hidden group-hover:flex ml-2">
                <span className="rounded text-sm active:text-sky-600 hover:bg-white p-1">
                  <FaEdit />
                </span>
                <span
                  onClick={() => setIsModal(true)}
                  className="rounded text-sm active:text-sky-600 hover:bg-white p-1"
                >
                  <FaPlus />
                </span>
                <span className="rounded text-sm active:text-sky-600 hover:bg-white p-1 text-red-400">
                  <FaTrash />
                </span>
              </div>
            </Link>
          </li>
        </ul>
        <ul className="space-y-2 font-medium ml-2">
          <li>
            <small className="text-gray-400">Private</small>
          </li>
          <li className="group">
            <Link className="flex items-center p-1 text-gray-600 rounded-lg hover:bg-gray-100 group">
              <span>
                <IoIosArrowForward />
              </span>
              <HiOutlineDocumentText />

              <span className="ml-1">Getting Start</span>

              {/* action  */}
              <div className="hidden group-hover:flex ml-2">
                <span className="rounded text-sm active:text-sky-600 hover:bg-white p-1">
                  <FaEdit />
                </span>
                <span
                  onClick={() => setIsModal(true)}
                  className="rounded text-sm active:text-sky-600 hover:bg-white p-1"
                >
                  <FaPlus />
                </span>
                <span className="rounded text-sm active:text-sky-600 hover:bg-white p-1 text-red-400">
                  <FaTrash />
                </span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
