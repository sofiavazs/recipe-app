import React, { useRef, useContext, ReactNode } from "react";
import { createPortal } from "react-dom";
import { Layer } from "grommet";
import { ContextUI } from "../../common/context";

interface Props {
  children: ReactNode;
}

const Modal: React.FC<Props> = ({ children }) => {
  const { setOpenModal } = useContext(ContextUI);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeModal = (e: any) => {
    if (modalRef.current === e.target) {
      setOpenModal(false);
    }
  };
  return createPortal(
    <Layer ref={modalRef} onClick={(e) => closeModal(e)}>
      {children}
    </Layer>,

    document.body
  );
};

export default Modal;
