import { createContext, useContext, useState } from "react";

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

export const FormContext = createContext(undefined);

export function FormProvider({ children }) {
  const [data, setData] = useState({});

  const setFormValues = (values) => {
    setData((prevValues) => ({
      ...prevValues,
      ...values,
    }));
  };

  return (
    <FormContext.Provider value={{ data, setFormValues }}>
      {children}
    </FormContext.Provider>
  );
}

export const useFormData = () => useContext(FormContext);
