import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Trabalhos from "./Pages/Trabalhos";
import Contato from "./Pages/Contato";
import Certificados from "./Pages/Certificados";

export default function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Contato" element={<Contato />} />
        <Route path="/Trabalhos" element={<Trabalhos />} />
        <Route path="/Certificados" element={<Certificados />} />
      </Routes>
    </Router>
  );
}
