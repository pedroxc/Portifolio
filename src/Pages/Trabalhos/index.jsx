import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Utils/Card";
import { works } from "./Utils/utils";

import { Container, Button, CardContainer } from "./styles";

function Trabalhos() {
  const navigate = useNavigate();
  return (
    <Container>
      <Button
        onClick={() => {
          navigate(-1);
        }}
      >
        Voltar
      </Button>
      <CardContainer>
        {works.map((e) => {
          return <Card data={e} />;
        })}
      </CardContainer>
    </Container>
  );
}

export default Trabalhos;
