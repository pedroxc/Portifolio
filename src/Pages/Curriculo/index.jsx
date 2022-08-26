import React, { useState } from "react";
import CV from "../../Assets/Docs/CV_PT.pdf";
import CVIngles from "../../Assets/Docs/CV.pdf";
import { Page, Document } from "react-pdf";
import { useNavigate } from "react-router-dom";

import { Conteiner, Button, ButtonWarper } from "./styled";

function Curriculo() {
  const navigate = useNavigate();
  const [pdf, setPdf] = useState(CV);
  return (
    <Document options={{ workerSrc: "pdf.worker.js" }} file={pdf}>
      <Conteiner>
        <ButtonWarper>
          <Button
            onClick={() => {
              navigate(-1);
            }}
          >
            Voltar
          </Button>
          {pdf === CV && (
            <Button onClick={() => setPdf(CVIngles)}>English</Button>
          )}
          {pdf === CVIngles && (
            <Button onClick={() => setPdf(CV)}>Português</Button>
          )}
        </ButtonWarper>
        <Page scale={1.5} pageNumber={1} />
        <Page scale={1.5} pageNumber={2} />
      </Conteiner>
    </Document>
  );
}

export default Curriculo;
