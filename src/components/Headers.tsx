import { Header, Heading } from "grommet";
import React from "react";

const Headers: React.FC = () => {
  return (
    <Header
      background={"#fdfdfd"}
      pad={{ left: "medium", right: "small", vertical: "small" }}
      elevation={"medium"}
      justify={"center"}
    >
      <Heading level={1} size={"2rem"} margin="none" textAlign="center">
        Receitas
      </Heading>
    </Header>
  );
};

export default Headers;
