import { FaRegCheckSquare } from "react-icons/fa";
import { NavLink, Outlet, useParams } from "react-router-dom";

const Task = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="p-2 flex-col rounded max-w-4xl flex  mx-auto my-5 min-h-screen">
      <h1 className="text-4xl flex gap-2 items-center text-gray-700 font-bold">
        <FaRegCheckSquare className="text-gray-400" /> Task
      </h1>
      <div className="flex gap-3">
        <NavLink
          to={`/todo/task/${id}/allTask`}
          className={(isActive) =>
            isActive
              ? "border-b-gray-900 border-b-2 font-bold text-gray-500"
              : ""
          }
        >
          All Task
        </NavLink>
        <NavLink
          to={`/todo/task/${id}/board`}
          className={(isActive) =>
            isActive
              ? "border-b-gray-900 border-b-2 font-bold text-gray-500"
              : ""
          }
        >
          Board
        </NavLink>
      </div>
      <span className="h-[.1px] w-full bg-gray-600 mb-3"></span>

      <Outlet />
    </div>
  );
};

export default Task;
