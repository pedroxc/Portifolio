import React, { useState } from "react";
import CV from "../../Assets/Docs/CV_PT.pdf";
import CVIngles from "../../Assets/Docs/CV.pdf";
import { Page, Document } from "react-pdf";
import { useNavigate } from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";

import { Container, Button, ButtonWarper } from "./styled";

function Curriculo() {
  const navigate = useNavigate();
  const [pdf, setPdf] = useState(CV);
  return (
    <Document options={{ workerSrc: "pdf.worker.js" }} file={pdf}>
      <Container>
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
        <BrowserView>
          <Page scale={1.5} pageNumber={1} />
          <Page scale={1.5} pageNumber={2} />
        </BrowserView>
        <MobileView>
          <Page scale={0.5} pageNumber={1} />
          <Page scale={0.5} pageNumber={2} />
        </MobileView>
      </Container>
    </Document>
  );
}

export default Curriculo;
