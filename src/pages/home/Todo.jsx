// import { useParams } from "react-router-dom";

const Todo = () => {
  // const { id } = useParams();
  return (
    <div>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md p-4">
          <div className="bg-white p-6 shadow-md rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">hello</h2>
              <button className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
                Run
              </button>
            </div>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code className="block text-sm font-mono">asldkjflaskdfj</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
