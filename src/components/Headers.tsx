import React, { useContext } from "react";
import { Button, Header, Heading } from "grommet";
import { ContextUI } from "../../common/context";
import Modal from "./Modal";

const Headers: React.FC = () => {
  const { openModal, setOpenModal } = useContext(ContextUI);
  return (
    <>
      <Header
        className="main-header"
        background={"#fdfdfd"}
        pad={{ left: "medium", right: "small", vertical: "small" }}
        elevation={"medium"}
        justify={"center"}
      >
        <Heading level={1} size={"2rem"} margin="none" textAlign="center">
          Receitas
        </Heading>
        <Button
          primary
          className="add-button"
          label=" Adicionar Receita"
          aria-label="adicionar receita"
          onClick={() => setOpenModal(true)}
        />
      </Header>
      {openModal && (
        <Modal>
          <div
            style={{
              width: "300px",
              height: "300px",
              backgroundColor: "white",
              borderRadius: "10px",
              display: "grid",
              placeItems: "center",
            }}
          >
            This is Modal
            <button onClick={() => setOpenModal(false)}>Close Modal</button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Headers;
