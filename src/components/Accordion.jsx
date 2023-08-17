/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { FaEdit, FaPlus, FaRegDotCircle, FaTrash } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";

import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { ModalContext } from "../context/ModalToggle";

const Accordion = ({ todoTitle, taskName, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { setIsModal } = useContext(ModalContext);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="group">
      <div className="flex items-center p-1 text-gray-600 rounded-lg hover:bg-gray-100 group">
        <span
          onClick={toggleAccordion}
          className="rounded text-sm active:text-sky-600 hover:bg-white p-1 cursor-pointer"
        >
          <IoIosArrowForward className={isOpen ? "rotate-90" : ""} />
        </span>
        <HiOutlineDocumentText />
        <Link to={`/todo/${id}`} className="ml-1">
          <span className="ml-1">
            {" "}
            {todoTitle.slice(0, 10)}
            {todoTitle.length > 10 ? "..." : ""}
          </span>
        </Link>

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
      </div>

      {isOpen && (
        <ul className="space-y-2 font-medium ml-6">
          <li className="group">
            <Link
              to={`/todo/task/${id}/allTask`}
              className="flex items-center p-1 text-gray-600 rounded-lg hover:bg-gray-100 group"
            >
              <FaRegDotCircle />

              <span className="ml-1">
                {taskName.slice(0, 12)}
                {taskName.length > 12 ? "..." : ""}
              </span>

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
      )}
    </li>
  );
};

export default Accordion;
