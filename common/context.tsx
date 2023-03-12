import { createContext, useState } from "react";

//Defining context
export const ContextUI = createContext(undefined);

//Context Wrapper
export function ContextUIProvider({ children }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <ContextUI.Provider
      value={{
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </ContextUI.Provider>
  );
}
