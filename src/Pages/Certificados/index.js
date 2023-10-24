import React from "react";
import { data } from "./utils";
import { Container, Card, SimpleButton } from "./styles";

export default function Certificados() {
  return (
    <Container>
      {data.map((e) => {
        return (
          <Card>
            <label>{e.title}</label>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <img src={e.pdf} alt={e.title} />
              <SimpleButton href={e.link} target="_blank" rel="noreferrer">
                Ver
              </SimpleButton>
            </div>
            <span>Cursado em: {e.from}</span>
            <span>Data: {e.date}</span>
          </Card>
        );
      })}
    </Container>
  );
}
