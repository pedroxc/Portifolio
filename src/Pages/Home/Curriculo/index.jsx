import React, { useState } from "react";
import CV from "../../../Assets/Docs/CV_PT.pdf";
import CVIngles from "../../../Assets/Docs/CV.pdf";
import { Page, Document } from "react-pdf";
import { BrowserView, MobileView } from "react-device-detect";

import { Container, Button, ButtonWarper } from "./styled";

function Curriculo() {
  const [pdf, setPdf] = useState(CV);
  const [page, setPage] = useState(1);

  return (
    <Document options={{ workerSrc: "pdf.worker.js" }} file={pdf}>
      <Container>
        <ButtonWarper>
          {page === 1 && pdf === CV && (
            <Button onClick={() => setPage(2)}>Página 2</Button>
          )}
          {page === 2 && pdf === CV && (
            <Button onClick={() => setPage(1)}>Página 1</Button>
          )}
          {page === 1 && pdf === CVIngles && (
            <Button onClick={() => setPage(2)}>Page 2</Button>
          )}
          {page === 2 && pdf === CVIngles && (
            <Button onClick={() => setPage(1)}>Page 1</Button>
          )}
          {pdf === CV && (
            <Button onClick={() => setPdf(CVIngles)}>English</Button>
          )}
          {pdf === CVIngles && (
            <Button onClick={() => setPdf(CV)}>Português</Button>
          )}
        </ButtonWarper>
        <BrowserView>
          <Page scale={1.5} pageNumber={page} />
        </BrowserView>
        <MobileView>
          <Page scale={0.5} pageNumber={page} />
        </MobileView>
      </Container>
    </Document>
  );
}

export default Curriculo;
