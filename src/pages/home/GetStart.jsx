import { useContext } from "react";
import NewTaskModal from "../../components/NewTaskModal";
import { ModalContext } from "../../context/ModalToggle";

const GetStart = () => {
  const { isModal, setIsModal } = useContext(ModalContext);
  return (
    <div className="flex justify-center md:items-start gap-5 min-h-[70vh] flex-col mx-2 md:mx-10">
      <h2 className="md:text-center text-5xl">Getting start</h2>
      <p className="max-w-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea hic
        voluptate omnis minus quas soluta facilis porro nihil accusantium
        obcaecati.
      </p>
      <button
        onClick={() => setIsModal(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none"
      >
        + New
      </button>
      {isModal && <NewTaskModal heading="New Task" />}
    </div>
  );
};

export default GetStart;
