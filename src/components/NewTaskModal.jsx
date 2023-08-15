import { useContext, useEffect, useRef, useState } from "react";
import { FaCheckSquare, FaEdit, FaTimes } from "react-icons/fa";
import { ModalContext } from "../context/ModalToggle";

/* eslint-disable react/prop-types */
const NewTaskModal = () => {
  const { setIsModal, isModal } = useContext(ModalContext);
  const [titleEdit, setTitleEdit] = useState(false);
  const [heading, setHeading] = useState("New Task");
  const ref = useRef(null);

  // click edit to focus heading
  useEffect(() => {
    if (ref.current) {
      const range = document.createRange();
      const sel = window.getSelection();
      range.setStart(
        ref.current.childNodes[0],
        ref.current.childNodes[0].length
      );
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
      ref.current.focus();
    }
  }, [titleEdit]);

  // submit todo to send data
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const todoDetail = form.description.value;

    const data = { heading, todoDetail };

    const isDataExist = localStorage.getItem("todo");
    if (isDataExist) {
      localStorage.setItem("todo", JSON.stringify([data]));
    } else {
      localStorage.setItem("todo", JSON.stringify());
    }
  };

  const handleHeadingEdit = () => {
    setTitleEdit(!titleEdit);
  };

  return (
    <div>
      <div
        id="large-modal"
        data-aos="fade-down"
        className="absolute left-0 top-0 z-50 w-full flex items-center justify-center backdrop-blur-sm bg-black/10 min-h-screen p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)]"
      >
        <div
          className="relative w-full max-w-4xl max-h-full"
          data-aos={isModal ? "zoom-in" : "zoom-out"}
        >
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow ">
            {/* Modal header */}
            <div className="flex items-center justify-between p-5 border-b rounded-t ">
              <h3
                contentEditable={titleEdit ? true : false}
                className="text-xl font-medium text-gray-900 focus:outline-none focus:outline-sky-500 focus:rounded p-2 cursor-text"
                ref={ref}
                onBlur={(e) => setHeading(e.target.innerText)}
                suppressContentEditableWarning={true}
              >
                {heading}
              </h3>
              <button
                className="ml-2 p-1 rounded hover:bg-gray-200"
                onClick={handleHeadingEdit}
              >
                {titleEdit ? <FaCheckSquare /> : <FaEdit />}
              </button>
              <button
                type="button"
                className="text-red-400 bg-transparent bg-red-200 hover:bg-red-300 hover:text-black rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center focus:outline-none"
                data-modal-hide="large-modal"
                onClick={() => setIsModal(false)}
              >
                <FaTimes />
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            {/* Modal body */}
            <form onSubmit={handleSubmit}>
              <div className="p-6 space-y-6">
                <textarea
                  placeholder="Todo Description"
                  className="text-base leading-relaxed text-gray-500 p-2 focus:outline-none border-2 rounded w-full"
                  name="description"
                ></textarea>
              </div>
              {/* Modal footer */}
              <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b ">
                <input
                  type="submit"
                  data-modal-hide="large-modal"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer"
                  value="Create"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTaskModal;
