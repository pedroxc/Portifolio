import React from "react";
import { useNavigate } from "react-router-dom";
import linkedin from "../../Assets/Icons/linkedin.png";
import github from "../../Assets/Icons/github.png";
import wpp from "../../Assets/Icons/wpp.png";

import { Container, Links, Button } from "./styles";

function Contato() {
  const navigate = useNavigate();
  return (
    <Container>
      <div>
        Telefone: (85) 9 8647 2422
        <a target="__blank" href="https://whatsa.me/5585986472422">
          <img src={wpp} alt="wpp" />
        </a>
      </div>
      <div>Email: pedroxaviercoelho@gmail.com</div>
      <Links>
        <div>
          <img src={linkedin} alt="linkedinIcon" />
          <a
            href="https://www.linkedin.com/in/pedro-xavier-coelho-7066b3a2/"
            target="__blank"
          >
            Linkedin
          </a>
        </div>
        <div>
          <img src={github} alt="githubIcon" />
          <a href="https://github.com/pedroxc" target="__blank">
            GitHub
          </a>
        </div>
      </Links>
      <Button
        onClick={() => {
          navigate(-1);
        }}
      >
        Voltar
      </Button>
    </Container>
  );
}

export default Contato;
