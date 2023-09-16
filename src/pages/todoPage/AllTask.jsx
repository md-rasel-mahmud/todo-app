import { useParams } from "react-router-dom";

import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { useDeleteSectionMutation } from "../../redux/apiCrudOp/deleteSection";
import { useEffect } from "react";
import Toast from "../../components/CustomToast";
import { useGetSingleBoardQuery } from "../../redux/apiCrudOp/getSingleBoard";

/* eslint-disable react/prop-types */
const AllTask = () => {
  const { boardId } = useParams();
  const { data } = useGetSingleBoardQuery(boardId);
  const [setDeleteSection, { data: deleteResponse }] =
    useDeleteSectionMutation();

  const handleSectionDelete = (e, id) => {
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
        setDeleteSection({ boardId, sectionId: id });

        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  useEffect(() => {
    if (deleteResponse) {
      Toast.fire({ icon: "success", title: "Section deleted successfully" });
    }
  }, [deleteResponse]);
  return (
    <div className="relative overflow-x-auto border sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500">
        {/* Task list table head  */}
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Task name
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Created at
            </th>
            <th scope="col" className="px-6 py-3">
              Deadline
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>

        {/* Task list table  */}
        <tbody>
          {data?.sections?.map((task, index) => (
            <tr key={index} className="bg-white">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                {task?.title || "Untitled"}
              </th>
              <td className="px-6 py-4">
                {task?.description || "Write a description"}
              </td>
              <td className="px-6 py-4">{task?.createdAt}</td>
              <td className="px-6 py-4">{task?.createdAt}</td>
              <td className="px-6 py-4">
                <button
                  onClick={handleSectionDelete}
                  className="text-red-400 hover:text-red-500 text-xl mr-2"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllTask;
