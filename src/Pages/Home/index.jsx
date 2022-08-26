import React from "react";
import { useNavigate } from "react-router-dom";

import { Container, Title, Description, Button, ButtonWarper } from "./styles";

function Home() {
  const navigate = useNavigate();
  return (
    <Container>
      <Title>Pedro Xavier Coelho</Title>
      <Description>Programador em formação</Description>
      <ButtonWarper>
        <Button
          onClick={() => {
            navigate("/Curriculo");
          }}
        >
          Curriculum Vitae
        </Button>
      </ButtonWarper>
    </Container>
  );
}

export default Home;
