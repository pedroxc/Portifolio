import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import WorkCard from "../Trabalhos/Utils/Card";
import { works } from "../Trabalhos/Utils/utils";
import Habilidades from "./habilidades";
import Perfil from "./Perfil";
import Curriculo from "./Curriculo";

import {
  Title,
  Container,
  NaviBar,
  Nav,
  Button,
  Works,
  WorkTitle,
  WorkWrapper,
} from "./styles";

function Home() {
  const navigate = useNavigate();
  const panels = {
    main: "Perfil",
    second: "Skills",
    third: "Curriculo",
  };
  const [panel, setPanel] = useState(panels.second);

  return (
    <>
      <Title>Programador Full Stack,Economista e Mestre em administração</Title>
      <Container>
        <NaviBar>
          <Nav
            onClick={() => {
              setPanel(panels.main);
            }}
            style={
              panel === "Perfil" ? { color: "blue", fontWeight: "bold" } : {}
            }
          >
            Perfil
          </Nav>
          <Nav
            onClick={() => {
              setPanel(panels.second);
            }}
            style={
              panel === "Skills" ? { color: "blue", fontWeight: "bold" } : {}
            }
          >
            Habilidades
          </Nav>
          <Nav
            onClick={() => {
              setPanel(panels.third);
            }}
            style={
              panel === "Curriculo" ? { color: "blue", fontWeight: "bold" } : {}
            }
          >
            Currículo
          </Nav>
        </NaviBar>
        {panel === "Perfil" && <Perfil />}
        {panel === "Skills" && <Habilidades />}
        {panel === "Curriculo" && <Curriculo />}
      </Container>

      <Works>
        <WorkTitle>Projetos</WorkTitle>
        <WorkWrapper>
          {works.map((e) => {
            return <WorkCard data={e} />;
          })}
          <Button
            onClick={() => {
              navigate("/trabalhos");
            }}
          >
            ver mais
          </Button>
        </WorkWrapper>
      </Works>
    </>
  );
}

export default Home;
