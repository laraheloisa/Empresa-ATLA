import { Link } from "react-router-dom";
import bgImage from "../assets/imagem.fundo.webp";

const HeroSection = () => {
  return (
    <>
      <section
        className="relative text-white text-center h-[650px] flex items-center justify-center bg-cover bg-center before:absolute before:inset-0 before:bg-gradient-to-b before:from-orange-500/80 before:to-orange-300/60"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="relative z-10 container mx-auto">
          <h1 className="text-4xl font-bold mb-4 font-poppins">Bem-Vindo à Atla</h1>
          <p className="text-lg font-light font-poppins">
            Uma comunicação eficaz entre escola e família transforma a educação.
          </p>
        </div>
      </section>

     
      <section className="grid grid-cols-1 md:grid-cols-3 w-full">
        {/* Bloco: Sobre Nós */}
        <div className="bg-orange-500 text-white p-10 flex flex-col items-center justify-center text-center h-[250px]">
          <h2 className="text-3xl font-semibold mb-4">Sobre Nós</h2>
          <p className="text-lg mb-4">Conheça nossa história e valores na educação.</p>
          <Link to="/escola" className="bg-white text-orange-500 px-4 py-2 rounded-lg font-semibold hover:bg-orange-300 hover:text-white transition">
            Saiba Mais
          </Link>
        </div>

        {/* Bloco: Responsáveis */}
        <div className="bg-orange-600 text-white p-10 flex flex-col items-center justify-center text-center h-[250px]">
          <h2 className="text-3xl font-semibold mb-4">Responsáveis</h2>
          <p className="text-lg mb-4">Apoio e comunicação para as famílias.</p>
          <Link to="/pais" className="bg-white text-orange-600 px-4 py-2 rounded-lg font-semibold hover:bg-orange-400 hover:text-white transition">
            Saiba Mais
          </Link>
        </div>

        {/* Bloco: Alunos */}
        <div className="bg-orange-700 text-white p-10 flex flex-col items-center justify-center text-center h-[250px]">
          <h2 className="text-3xl font-semibold mb-4">Alunos</h2>
          <p className="text-lg mb-4">Recursos e suporte para os estudantes.</p>
          <Link to="/alunos" className="bg-white text-orange-700 px-4 py-2 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition">
            Saiba Mais
          </Link>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
