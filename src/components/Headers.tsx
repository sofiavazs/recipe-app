import React, { useContext, useState } from "react";
import { Box, Button, Footer, Header, Heading, Text } from "grommet";
import { Add, FormClose } from "grommet-icons";
import { useTranslation } from "react-i18next";
import { ContextUI } from "../../common/context";
import Link from "next/link";

const Headers: React.FC = () => {
  const { t } = useTranslation();

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
        <Link href="/recipes/new">
          <Button
            icon={<Add />}
            className="add-button"
            label={t("addRecipe")}
            aria-label={t("addRecipe")}
          />
        </Link>
      </Header>
    </>
  );
};

export default Headers;
