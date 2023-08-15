/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { FaEdit, FaPlus, FaRegDotCircle, FaTrash } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";

import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { ModalContext } from "../context/ModalToggle";

const Accordion = ({ todoTitle, taskTitle, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { setIsModal } = useContext(ModalContext);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="group">
      <Link
        to={`/todo/${id}`}
        className="flex items-center p-1 text-gray-600 rounded-lg hover:bg-gray-100 group"
      >
        <span
          onClick={toggleAccordion}
          className="rounded text-sm active:text-sky-600 hover:bg-white p-1"
        >
          <IoIosArrowForward className={isOpen ? "rotate-90" : ""} />
        </span>
        <HiOutlineDocumentText />

        <span className="ml-1">{todoTitle}</span>

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

      {isOpen && (
        <ul className="space-y-2 font-medium ml-6">
          <li className="group">
            <Link className="flex items-center p-1 text-gray-600 rounded-lg hover:bg-gray-100 group">
              <FaRegDotCircle />

              <span className="ml-1">
                {taskTitle.slice(0, 12)}
                {taskTitle.length > 12 ? "..." : ""}
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
