import React from "react";
import { Description, Links, Text, ImagemWarpper } from "./styles";
import code from "../../../Assets/Icons/code.png";
import linkedin from "../../../Assets/Icons/linkedin.png";
import github from "../../../Assets/Icons/github.png";

export default function Perfil() {
  return (
    <Description>
      <ImagemWarpper>
        <img src={code} alt="code" />
      </ImagemWarpper>
      <div>
        <Text>
          Olá me chamo Pedro, sou Mestre em Administração, Bacharel em Economia
          e Comercio Exterior. Já participei de dois projetos com
          desenvolvimento web em React e React Native. Tenho experiencia com
          Fintechs, tenho dois anos de experiencia com empresas do ramo de
          investimentos.
        </Text>
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
      </div>
      <ImagemWarpper>
        <img src={code} alt="code" className="mobile" />
      </ImagemWarpper>
    </Description>
  );
}
