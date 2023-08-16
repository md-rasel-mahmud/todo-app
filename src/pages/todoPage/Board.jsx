import { HiOutlineDocumentText } from "react-icons/hi";
import useTaskList from "../../hooks/useTaskList";
import { useParams } from "react-router-dom";

const Board = () => {
  const [allTaskList] = useTaskList();
  const { id } = useParams();

  const filterAllTask = allTaskList.find((task) => task.id == id);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 flex-wrap">
      {filterAllTask.taskList.map((task) => (
        <div key={task.id} className="bg-gray-50 p-4 rounded w-full">
          <h4 className="font-bold my-2 flex gap-2 items-center">
            <HiOutlineDocumentText /> {task.taskName}
          </h4>
          <div className="flex gap-3 items-center">
            <img
              src="https://lh3.googleusercontent.com/a/AAcHTtdRKU4nOLn52zXAxQ9rXsusEYUhvaMGskYaSDCr2nzEBNU=s100"
              alt="Profile pic"
              className="h-5"
            />
            <p>{task.creatorName}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Board;
