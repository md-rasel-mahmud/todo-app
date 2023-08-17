import { HiOutlineDocumentText } from "react-icons/hi";
import useTaskList from "../../hooks/useTaskList";
import { useParams } from "react-router-dom";

const Board = () => {
  const [allTaskList] = useTaskList();
  const { id } = useParams();

  const filterAllTask = allTaskList.find((task) => task.id == id);
  return (
    <>
      <div className="">
        <div
          id="scrollContainer"
          className="flex flex-no-wrap overflow-x-auto scrolling-touch items-start mb-8"
        >
          {filterAllTask.taskList.map((task) => (
            <div
              key={task.id}
              className="flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 p-2 bg-gray-50 rounded-lg"
            >
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
      </div>
    </>
  );
};

export default Board;
