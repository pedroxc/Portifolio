import React from "react";
import Card from "../../../Components/Card";
import { Skills, CardWarpper } from "./styles";
import { frontednContent, backendContent, reactContent } from "../utils";

export default function Habilidades() {
  return (
    <Skills>
      <CardWarpper>
        <Card
          cardType="skill"
          title="Front-End"
          content={frontednContent}
        ></Card>
        <Card cardType="skill" title="Back-End" content={backendContent}></Card>
        <Card
          cardType="skill"
          title="React & React Native"
          content={reactContent}
        ></Card>
      </CardWarpper>
    </Skills>
  );
}
