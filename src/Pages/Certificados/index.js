import React, { useState } from "react";
import { data } from "./utils";
import { Container, Card, Button } from "./styles";
import ReactModal from "react-modal";
import Modal from "./Modal";

export default function Certificados() {
  const [modal, openModal] = useState(false);
  const [doc, setDoc] = useState();
  return (
    <Container>
      {data.map((e) => {
        return (
          <Card>
            <label>{e.title}</label>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <iframe src={e.pdf} title={e.title} scrolling="no" />
              <Button
                onClick={() => {
                  setDoc(e);
                  openModal(true);
                }}
              >
                Ver
              </Button>
            </div>
            <span>Cursado em: {e.from}</span>
            <span>Data: {e.date}</span>
          </Card>
        );
      })}
      <ReactModal
        style={{
          content: {
            maxWidth: "70vw",
            maxHeight: "70vh",
          },
        }}
        isOpen={modal}
      >
        <Modal doc={doc} />
        <button onClick={() => openModal(false)}>Fechar</button>
      </ReactModal>
    </Container>
  );
}
