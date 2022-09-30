import React from "react";

import { Container, Title, Imagem, Button, ButtonWarpper } from "./styles";

function Card({ data }) {
  return (
    <Container>
      <Title>{data.title}</Title>
      <Imagem src={data.imagem} alt="" />
      <ButtonWarpper>
        <Button href={data.url} target="_blank">
          Ver Projeto
        </Button>
      </ButtonWarpper>
    </Container>
  );
}

export default Card;
