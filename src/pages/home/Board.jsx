import { FaPlus, FaRegCheckSquare } from "react-icons/fa";
import { useUpdateBoardMutation } from "../../redux/apiCrudOp/updateBoard";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { useCreateSectionMutation } from "../../redux/apiCrudOp/createSection";
import { useEffect } from "react";
import Toast from "../../components/CustomToast";
import { useGetSingleBoardQuery } from "../../redux/apiCrudOp/getSingleBoard";
import CustomLoader from "../../components/CustomLoader";

const Board = () => {
  const { boardId } = useParams();
  const { data } = useGetSingleBoardQuery(boardId);
  const [
    setUpdateData,
    { data: updateDataResponse, isLoading: updateLoading },
  ] = useUpdateBoardMutation();
  const [
    setCreateSection,
    { data: createSectionResponse, isLoading: createLoading },
  ] = useCreateSectionMutation();

  let timer;
  const updateTitle = (e) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      setUpdateData({
        boardId,
        title: e.target.value,
      });
    }, 1000);
  };
  const updateDescription = (e) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      setUpdateData({
        boardId,
        description: e.target.value,
      });
    }, 1000);
  };
  // console.log(boardId);

  const handleCreateSection = () => {
    setCreateSection({
      id: boardId,
      title: "New Section",
    });
  };
  useEffect(() => {
    if (createSectionResponse) {
      Toast.fire({
        icon: "success",
        title: "Section Created successfully",
      });
    }
  }, [createSectionResponse]);
  useEffect(() => {
    if (updateDataResponse) {
      Toast.fire({
        icon: "success",
        title: "Board Update successfully",
      });
    }
  }, [updateDataResponse]);

  return (
    <>
      {(updateLoading || createLoading) && <CustomLoader />}
      <div className="p-2 flex-col rounded max-w-4xl flex  mx-auto my-5 min-h-screen">
        <h2 className="text-4xl flex gap-2 items-center text-gray-700 font-bold">
          <FaRegCheckSquare className="text-gray-500 capitalize" />
          <input
            type="text"
            className="debounce_input outline-none"
            defaultValue={data?.title && data.title}
            onChange={updateTitle}
          />
        </h2>
        <p>
          <textarea
            className="debounce_input_textarea h-20 outline-none	resize-none  overflow-hidden w-full border-0;"
            defaultValue={data?.description && data.description}
            onChange={updateDescription}
          ></textarea>
        </p>
        <button onClick={handleCreateSection}>
          <h3 className="shadow-md font-bold text-green-500 border-green-500 text-xl my-2 bg-gray-50 p-2  rounded-sm flex gap-2 items-center uppercase">
            <FaPlus /> Add Section
          </h3>
        </button>
        <div className="flex gap-3">
          <NavLink
            to={`/board/${boardId}/allTask`}
            className={({ isActive }) =>
              isActive
                ? "border-b-gray-900 border-b-2 font-bold text-gray-500"
                : ""
            }
          >
            All Task
          </NavLink>
          <NavLink
            to={`/board/${boardId}/section`}
            className={({ isActive }) =>
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
    </>
  );
};

export default Board;
