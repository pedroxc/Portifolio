import React from "react";

import { Container, Title, Table, Lines } from "./styles";

function Card({ title, content }) {
  console.log(typeof content);
  const contentTitle = Object.keys(content);

  return (
    <Container>
      <Title>{title}</Title>
      <Table>
        {contentTitle.map((e) => {
          return (
            <Lines>
              <img src={content[e]} alt="icon"></img>

              {e}
            </Lines>
          );
        })}
      </Table>
    </Container>
  );
}

export default Card;
