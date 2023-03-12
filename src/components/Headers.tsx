import React, { useContext } from "react";
import { Box, Button, Header, Heading, Text } from "grommet";
import { FormClose } from "grommet-icons";
import { ContextUI } from "../../common/context";
import Modal from "./Modal";
import NewRecipeForm from "./NewRecipeForm";

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
          <Box
            style={{
              minWidth: "500px",
              minHeight: "300px",
              backgroundColor: "white",
              borderRadius: "10px",
            }}
          >
            <Box
              direction="row"
              align="center"
              width={"100%"}
              as="header"
              elevation="small"
              justify="between"
            >
              <Text margin={{ left: "small" }}>Adicionar Receita</Text>
              <Button
                icon={<FormClose />}
                onClick={() => setOpenModal(false)}
              />
            </Box>
            <Box
              pad={"1rem"}
              style={{
                border: "1px solid red",
              }}
              direction={"column"}
            >
              <NewRecipeForm />
            </Box>
          </Box>
        </Modal>
      )}
    </>
  );
};

export default Headers;
