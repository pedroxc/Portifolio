import React from "react";
import { Container } from "./styles";

export default function Warpper({ doc }) {
  console.log(doc);
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <iframe
        src={doc.pdf}
        title={doc.title}
        zoom="100%"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
