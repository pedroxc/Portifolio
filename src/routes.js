import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Certificados from "./Pages/Certifications";
import Trabalhos from "./Pages/Trabalhos";

export default function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Certificados" element={<Certificados />} />
        <Route path="/Trabalhos" element={<Trabalhos />} />
      </Routes>
    </Router>
  );
}
