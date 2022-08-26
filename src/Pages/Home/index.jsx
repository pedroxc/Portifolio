import React from "react";

import { Container, Title, Description, Button } from "./styles";

function Home() {
  return (
    <Container>
      <Title>
        Pedro Xavier Coelho
        <Button>Curriculum Vitae</Button>
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
