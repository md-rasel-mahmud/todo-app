import { useParams } from "react-router-dom";
import useTaskList from "../../hooks/useTaskList";

/* eslint-disable react/prop-types */
const AllTask = () => {
  const [allTaskList] = useTaskList();
  const { id } = useParams();

  const filterAllTask = allTaskList.find((task) => task.id == id);

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
              User Name
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
          {filterAllTask.taskList.map((task, index) => (
            <tr key={index} className="bg-white">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                {task.taskName}
              </th>
              <td className="px-6 py-4">{task.creatorName}</td>
              <td className="px-6 py-4">{task.createdAt}</td>
              <td className="px-6 py-4">{task.createdAt}</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Edit
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllTask;
