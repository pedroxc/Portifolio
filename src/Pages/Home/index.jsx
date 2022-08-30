import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../Components/Card";
import { frontednContent, backendContent, reactContent } from "./utils";
import WorkCard from "../Trabalhos/Utils/Card";
import { works } from "../Trabalhos/Utils/utils";

import {
  Title,
  Skills,
  Container,
  CardWarpper,
  Description,
  CardTitle,
  Button,
  ButtonWarper,
  Works,
  WorkTitle,
  WorkWrapper,
} from "./styles";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Title>Programador Full Stack,Economista e Mestre em administração</Title>
      <Container>
        <Description>
          <br /> Olá me chamo Pedro, sou Mestre em Administração, Bacharel em
          Economia e Comercio Exterior. Já participei de dois projetos com
          desenvolvimento web em React e React Native. Tenho experiencia com
          Fintechs, tenho dois anos de experiencia com empresas do ramo de
          investimentos.
        </Description>
      </Container>
      <ButtonWarper>
        <Button
          onClick={() => {
            navigate("/Curriculo");
          }}
        >
          Curriculum Vitae
        </Button>
      </ButtonWarper>
      <Skills>
        <CardTitle>Habilidades/Skills</CardTitle>
        <CardWarpper>
          <Card
            cardType="skill"
            title="Front-End"
            content={frontednContent}
          ></Card>
          <Card
            cardType="skill"
            title="Back-End"
            content={backendContent}
          ></Card>
          <Card
            cardType="skill"
            title="React & React Native"
            content={reactContent}
          ></Card>
        </CardWarpper>
      </Skills>

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
