import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../Components/Card";
import Sql from "../../Assets/Icons/sql.png";
import Js from "../../Assets/Icons/js.png";
import Css from "../../Assets/Icons/css.png";
import Ts from "../../Assets/Icons/ts.png";
import Html from "../../Assets/Icons/html.png";
import Nodejs from "../../Assets/Icons/nodejs.png";
import Python from "../../Assets/Icons/python.png";
import {
  Container,
  Title,
  Skills,
  CardWarpper,
  Description,
  Button,
  ButtonWarper,
} from "./styles";

function Home() {
  const navigate = useNavigate();
  const frontednContent = {
    JavaScript: Js,
    TypeScript: Ts,
    HTML: Html,
    CSS: Css,
  };
  const backendContent = {
    "Node/Js": Nodejs,
    SQL: Sql,
    Python: Python,
  };
  const reactContent = ["Primeiro", "Segundo"];
  return (
    <Container>
      <Title>
        Programador Full Stack. Busncado oportunidades para atuar em
        desenolvimento Web.
      </Title>
      <Skills>
        <Title>Habilidades/Skills</Title>
        <CardWarpper>
          <Card title="Front-End" content={frontednContent}></Card>
          <Card title="Back-End" content={backendContent}></Card>
          <Card title="React & React Native" content={reactContent}></Card>
        </CardWarpper>
      </Skills>
      <Description>
        <br /> Olá me chamo Pedro, sou Mestre em Administração, Bacharel em
        Economia e Comercio Exterior. Já participei de dois projetos com
        desenvolvimento web em React e React Native. Tenho experiencia com
        Fintechs, tenho dois anos de experiencia com empresas do ramo de
        investimentos.
      </Description>
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
