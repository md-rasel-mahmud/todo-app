import { HiOutlineDocumentText } from "react-icons/hi";
import { useParams } from "react-router-dom";
import { useGetBoardSectionQuery } from "../../redux/apiCrudOp/getBoardSection";
import { FaSearch, FaTrash } from "react-icons/fa";
import { useUpdateSectionMutation } from "../../redux/apiCrudOp/UpdateSection";
import { useDeleteSectionMutation } from "../../redux/apiCrudOp/deleteSection";

const Section = () => {
  const { boardId } = useParams();
  const { data } = useGetBoardSectionQuery(boardId);

  const [setUpdateSections, { data: updateResponse }] =
    useUpdateSectionMutation();
  const [setDeleteSection, { data: deleteResponse }] =
    useDeleteSectionMutation();

  let timer;
  const updateTitle = (e, sectionId) => {
    const title = e.target.value;
    clearTimeout(timer);
    timer = setTimeout(() => {
      setUpdateSections({ boardId, sectionId, title });
    }, 1000);
  };
  const updateDescription = (e, sectionId) => {
    const description = e.target.value;
    clearTimeout(timer);
    timer = setTimeout(() => {
      setUpdateSections({ boardId, sectionId, description });
    }, 1000);
  };

  const handleSectionDelete = (e, id) => {
    setDeleteSection({ boardId, sectionId: id });
  };

  console.log(deleteResponse);
  return (
    <>
      <div className="">
        <div
          id="scrollContainer"
          className="flex flex-no-wrap overflow-x-auto scrolling-touch items-start mb-8"
        >
          {data?.sections.length > 0 ? (
            data.sections?.map((task, i) => (
              <div
                key={i}
                className="flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 p-2 bg-gray-50 rounded-lg"
              >
                <h4 className="font-bold my-2 flex justify-between items-center">
                  <div className="flex gap-1 items-center">
                    <HiOutlineDocumentText />
                    <input
                      type="text"
                      className="debounce_input bg-transparent outline-none"
                      defaultValue={task?.title || "Untitled"}
                      onChange={(e) => updateTitle(e, task._id)}
                    />
                  </div>
                  <button onClick={(e) => handleSectionDelete(e, task._id)}>
                    <FaTrash className="text-red-300 hover:text-red-500 cursor-pointer" />
                  </button>
                </h4>
                <div className="flex items-start">
                  <small className="ml-5">
                    <input
                      type="text"
                      className="debounce_input bg-transparent outline-none"
                      defaultValue={task?.description || "Write Description"}
                      onChange={(e) => updateDescription(e, task._id)}
                    />
                  </small>
                </div>
              </div>
            ))
          ) : (
            <h2 className="text-4xl flex gap-2 items-center text-red-500 bg-red-100 p-2 rounded font-semibold w-full">
              <FaSearch className="text-3xl" /> No sections found
            </h2>
          )}
        </div>
      </div>
    </>
  );
};

export default Section;
