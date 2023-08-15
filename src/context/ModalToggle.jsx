/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ModalContext = createContext({});

const ModalToggle = ({ children }) => {
  const [isModal, setIsModal] = useState(false);

  const modalState = {
    isModal,
    setIsModal,
  };
  return (
    <ModalContext.Provider value={modalState}>{children}</ModalContext.Provider>
  );
};

export default ModalToggle;
