import { createBrowserRouter } from "react-router-dom";
import App from "../layouts/App";
import GetStart from "../pages/home/GetStart";
import Authentication from "../layouts/Authentication";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import Todo from "../pages/home/Todo";
import Task from "../pages/home/Task";
import AllTask from "../pages/todoPage/AllTask";
import Board from "../pages/todoPage/Board";

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        element: <GetStart />,
        path: "/",
      },
      {
        element: <Todo />,
        path: "/todo/:id",
      },
      {
        element: <Task />,
        path: "todo/task/:id",
        children: [
          {
            element: <AllTask />,
            path: "allTask",
          },
          {
            element: <Board />,
            path: "board",
          },
        ],
      },
    ],
  },
  {
    element: <Authentication />,
    path: "auth",
    children: [
      {
        element: <Login />,
        path: "login",
      },
      {
        element: <Register />,
        path: "register",
      },
    ],
  },
]);
export default router;
