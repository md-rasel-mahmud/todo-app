/* eslint-disable react/prop-types */
import { HiOutlineDocumentText, HiOutlineLogout } from "react-icons/hi";
import {
  FaBars,
  FaEdit,
  FaPlus,
  FaPlusCircle,
  FaTimes,
  FaTrash,
} from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../context/ModalToggle";
import { useGetBoardQuery } from "../redux/apiCrudOp/getBoard";
import { useDeleteBoardMutation } from "../redux/apiCrudOp/deleteBoard";
import { useCreateBoardMutation } from "../redux/features/baseApi";

import Swal from "sweetalert2";
import Toast from "./CustomToast";
import CustomLoader from "./CustomLoader";
// import Accordion from "./Accordion";

const Sidebar = () => {
  const { setIsModal } = useContext(ModalContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // redux hooks
  const { data: todoData, isLoading: getDataLoading } = useGetBoardQuery();
  const [setDeleteBoard, { data: deleteResponse, isLoading: deleteLoading }] =
    useDeleteBoardMutation();
  const [createBoard, { data: boardCreateResponse, isLoading: createLoading }] =
    useCreateBoardMutation();

  // navigator
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/auth/login");
  };

  // create board and navigate to new page
  const handleBoard = () => {
    createBoard();
  };

  // delete board
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setDeleteBoard(id);

        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  // show toast
  useEffect(() => {
    if (boardCreateResponse) {
      Toast.fire({
        icon: "success",
        title: "Board Create successfully",
      });
    }
    if (deleteResponse) {
      Toast.fire({
        icon: "success",
        title: "Deleted successfully",
      });
      navigate(`/board/${todoData?.[0]._id}/section` || "/");
    }
    if (boardCreateResponse) {
      navigate(`/board/${boardCreateResponse.id}/section`);
    }
  }, [deleteResponse, boardCreateResponse]);

  return (
    <>
      {(createLoading || deleteLoading || getDataLoading) && <CustomLoader />}
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
                  type="button"
                  onClick={handleBoard}
                  className="flex items-center gap-2 p-1 text-gray-500 rounded-lg hover:bg-gray-100 group w-full focus:outline-none active:bg-white"
                >
                  <FaPlusCircle /> New page
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex items-center gap-2 p-1 bg-red-100 text-red-500 rounded-lg hover:bg-red-50 group w-full focus:outline-none active:bg-white"
                >
                  <HiOutlineLogout className="ml-1" /> logout
                </button>
              </li>
            </ul>
            <ul className="space-y-1 font-medium ml-2">
              {todoData?.find((favorite) => favorite.favorite === true)
                ?.favorite === true && (
                <li>
                  <small className="text-gray-400">Favorite</small>
                </li>
              )}
              {todoData
                ?.filter((favorite) => favorite.favorite === true)
                .map((item) => (
                  <li key={item._id} className="group">
                    <div className="flex justify-between items-center p-1 text-gray-600 rounded-lg hover:bg-gray-100 group">
                      <Link
                        to={`board/${item._id}/section`}
                        className="hover:bg-white p-1 rounded-md w-full"
                      >
                        <span className="flex gap-1 items-center">
                          <HiOutlineDocumentText />
                          {item.title.length > 14
                            ? item.title.slice(0, 11) + "..."
                            : item.title}
                        </span>
                      </Link>

                      <div className="hidden group-hover:flex ml-2">
                        <span className="rounded cursor-pointer text-sm active:text-sky-600 hover:bg-white p-1">
                          <FaEdit />
                        </span>
                        <span
                          onClick={() => setIsModal(true)}
                          className="rounded cursor-pointer text-sm active:text-sky-600 hover:bg-white p-1"
                        >
                          <FaPlus />
                        </span>
                        <span
                          onClick={() => handleDelete(item._id)}
                          className="rounded cursor-pointer text-sm active:text-sky-600 hover:bg-white p-1 text-red-400"
                        >
                          <FaTrash />
                        </span>
                      </div>
                    </div>
                  </li>
                ))}

              <li>
                <small className="text-gray-400">All Task</small>
              </li>

              {todoData?.map((item) => (
                <li key={item._id} className="group">
                  <div className="flex justify-between items-center p-1 text-gray-600 rounded-lg hover:bg-gray-100 group">
                    <Link
                      to={`board/${item._id}/section`}
                      className="hover:bg-white p-1 rounded-md w-full"
                    >
                      <span className="flex gap-1 items-center">
                        <HiOutlineDocumentText />
                        {item.title.length > 14
                          ? item.title.slice(0, 11) + "..."
                          : item.title}
                      </span>
                    </Link>

                    <div className="hidden group-hover:flex ml-2">
                      <span className="rounded cursor-pointer text-sm active:text-sky-600 hover:bg-white p-1">
                        <FaEdit />
                      </span>
                      <span
                        onClick={() => setIsModal(true)}
                        className="rounded cursor-pointer text-sm active:text-sky-600 hover:bg-white p-1"
                      >
                        <FaPlus />
                      </span>
                      <span
                        onClick={() => handleDelete(item._id)}
                        className="rounded cursor-pointer text-sm active:text-sky-600 hover:bg-white p-1 text-red-400"
                      >
                        <FaTrash />
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
