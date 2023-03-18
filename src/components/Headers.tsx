import React, { useContext, useState } from "react";
import { Box, Button, Footer, Header, Heading, Text } from "grommet";
import { Add, FormClose } from "grommet-icons";
import { ContextUI } from "../../common/context";
import Modal from "./Modal";
import NewRecipeForm from "./NewRecipeForm";
import { useTranslation } from "react-i18next";

const Headers: React.FC = () => {
  const { t } = useTranslation();
  const { openModal, setOpenModal } = useContext(ContextUI);
  const [formStep, setFormStep] = useState(0);
  const nextFormStep = () => setFormStep(formStep + 1);
  const prevFormStep = () => setFormStep(formStep - 1);

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
          {t("recipe")}
        </Heading>
        <Button
          icon={<Add />}
          className="add-button"
          label={t("addRecipe")}
          aria-label={t("addRecipe")}
          onClick={() => setOpenModal(true)}
        />
      </Header>
      {openModal && (
        <Modal className="modal">
          <Box
            style={{
              minWidth: "50vw",
              minHeight: "50vh",
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
              <Text size="1.5rem" weight={600} margin={{ left: "small" }}>
                {t("addRecipe")}
              </Text>
              <Button
                icon={<FormClose />}
                onClick={() => setOpenModal(false)}
              />
            </Box>
            <Box
              className="form-wrapper"
              pad={"1rem"}
              direction={"row"}
              overflow={"scroll"}
            >
              <NewRecipeForm
                nextFormStep={nextFormStep}
                previousFormStep={prevFormStep}
                formStep={formStep}
              />
            </Box>
            <br />
            <Footer pad="small" background={"white"}>
              <Box justify="start">
                {formStep > 0 && formStep < 3 && (
                  <Button onClick={prevFormStep} label={"Previous"} />
                )}
              </Box>
              {formStep < 2 && (
                <Button onClick={nextFormStep} label={"Next"} primary />
              )}
            </Footer>
          </Box>
        </Modal>
      )}
    </>
  );
};

export default Headers;
