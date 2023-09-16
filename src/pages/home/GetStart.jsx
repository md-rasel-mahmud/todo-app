import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import NewTaskModal from "../../components/NewTaskModal";
import { ModalContext } from "../../context/ModalToggle";
import { useCreateBoardMutation } from "../../redux/features/baseApi";
import { Dots } from "react-preloaders";

const GetStart = () => {
  const { isModal } = useContext(ModalContext);
  const [createBoard, { data: boardCreateResponse, isLoading }] =
    useCreateBoardMutation();
  // const { taskId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (boardCreateResponse) {
      navigate(`/board/${boardCreateResponse.id}`);
    }
  }, [boardCreateResponse]);

  return (
    <div className="flex justify-center md:items-start gap-5 min-h-[70vh] flex-col mx-2 md:mx-10">
      <h2 className="md:text-center text-5xl">Getting start</h2>
      <p className="max-w-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic
        voluptate omnis minus quas soluta facilis porro nihil accusantium
        obcaecati.
      </p>
      <button
        onClick={() => createBoard()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none"
      >
        + New
      </button>
      {isModal && <NewTaskModal heading="New Task" />}
      {isLoading && <Dots color={"black"} />}
    </div>
  );
};

export default GetStart;
