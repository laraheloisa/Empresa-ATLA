import React from "react";
import { Link } from "react-router-dom";
import logoAtla from "../assets/img2.atla.jpg";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md p-8 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-5xl font-semibold flex items-center ml-10">
          <img src={logoAtla} alt="Atla Logo" className="h-10 mr-5" />
          ATLA 
        </Link>
        <div className="space-x-12  text-orange-500">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/escola" className="hover:underline">Sobre Nós</Link>
          <Link to="/pais" className="hover:underline">Pais</Link>
          <Link to="/alunos" className="hover:underline">Alunos</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
