import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Pais from "./pages/Pais";
import Alunos from "./pages/Alunos";
import Escola from "./pages/Escola";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pais" element={<Pais />} />
        <Route path="/alunos" element={<Alunos />} />
        <Route path="/escola" element={<Escola />} />
      </Routes>
    </Router>
  );
};

export default App;
