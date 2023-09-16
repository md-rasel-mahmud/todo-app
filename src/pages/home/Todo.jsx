import { useParams } from "react-router-dom";

const Todo = () => {
  const { todoId } = useParams();
  console.log(todoId);
  return (
    <div>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center rounded my-2">
        <div className="w-full max-w-md p-4">
          <div className="bg-white p-6 shadow-md rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Todo Id {todoId}</h2>
            </div>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code className="block text-sm font-mono">Description</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
