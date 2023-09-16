/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom/dist";

const PrivateLayout = ({ children }) => {
  const token = localStorage.getItem("accessToken");

  if (token) {
    return children;
  } else {
    return <Navigate to={"/auth/login"}></Navigate>;
  }
};

export default PrivateLayout;
