import React from "react";

import { Container, Title, Imagem, Button } from "./styles";

function Card({ data }) {
  return (
    <Container>
      <Title>{data.title}</Title>
      <Imagem src={data.imagem} alt="" />
      <Button href={data.url} target="_blank">
        Ver Projeto
      </Button>
    </Container>
  );
}

export default Card;
