import { createBrowserRouter } from "react-router-dom";
import App from "../layouts/App";
import GetStart from "../pages/home/GetStart";
import Authentication from "../layouts/Authentication";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import Todo from "../pages/home/Todo";
import AllTask from "../pages/todoPage/AllTask";

import PrivateLayout from "../layouts/PrivateLayout";
import Board from "../pages/home/Board";
import Section from "../pages/todoPage/Section";

const router = createBrowserRouter([
  {
    element: (
      <PrivateLayout>
        <App />
      </PrivateLayout>
    ),
    path: "/",
    children: [
      {
        element: <GetStart />,
        path: "/",
      },
      {
        element: <Todo />,
        path: "/todo/:todoId",
      },
      {
        element: <Board />,
        path: "board/:boardId/",
        children: [
          {
            element: <AllTask />,
            path: "allTask",
          },
          {
            element: <Section />,
            path: "section",
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
