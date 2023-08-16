/* eslint-disable react/prop-types */
import { HiOutlineDocumentText } from "react-icons/hi";
import {
  FaBars,
  FaEdit,
  FaPlus,
  FaPlusCircle,
  FaTimes,
  FaTrash,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ModalContext } from "../context/ModalToggle";
import Accordion from "./Accordion";
import useTodoList from "../hooks/useTodoList";

const Sidebar = () => {
  const { setIsModal } = useContext(ModalContext);
  const [todoList] = useTodoList();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setSidebarOpen(true)}
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-full sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 overflow-hidden "
      >
        <span className="sr-only">Open sidebar</span>

        <FaBars />
      </button>
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          sidebarOpen || "-translate-x-full"
        } sm:translate-x-0`}
      >
        {/* sidebar  */}
        <button
          onClick={() => setSidebarOpen(false)}
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-red-800 bg-red-200 m-1 rounded-full sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 overflow-hidden absolute right-0"
        >
          <span className="sr-only">Open sidebar</span>

          <FaTimes />
        </button>
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
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
            {/* Getting started  */}
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

            {/* sidebar list  */}
            {todoList.map((item) => (
              <Accordion
                key={item.id}
                id={item.id}
                todoTitle={item.todoTitle}
                taskName={item.taskName}
              />
            ))}
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
    </div>
  );
};

export default Sidebar;
