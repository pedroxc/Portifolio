import React from "react";
import { useNavigate } from "react-router-dom";

import { Container, Title, Description, Button } from "./styles";

function Home() {
  const navigate = useNavigate();
  return (
    <Container>
      <Title>
        Pedro Xavier Coelho
        <Button
          onClick={() => {
            navigate("/Curriculo");
          }}
        >
          Curriculum Vitae
        </Button>
      </Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec suscipit
        ultricies enim eu efficitur. Vestibulum consectetur blandit enim quis
        pharetra. Mauris eleifend condimentum purus, at cursus diam tempus at.
        Suspendisse in mauris nec ex sodales porttitor. Nunc vehicula neque at
        turpis varius, ac tincidunt orci dictum.
      </Description>
    </Container>
  );
}

export default Home;
