import React, { useRef, useContext, ReactNode } from "react";
import { createPortal } from "react-dom";
import { Layer } from "grommet";
import { ContextUI } from "../../common/context";

interface Props {
  children: ReactNode;
  className?: string;
}

const Modal: React.FC<Props> = ({ children, className }) => {
  const { setOpenModal } = useContext(ContextUI);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeModal = (e: any) => {
    if (modalRef.current === e.target) {
      setOpenModal(false);
    }
  };
  return createPortal(
    <Layer ref={modalRef} onClick={(e) => closeModal(e)} className={className}>
      {children}
    </Layer>,

    document.body
  );
};

export default Modal;
