import React from "react";

const Pais = () => {
  return (
    <section className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl font-bold text-orange-600 mb-6">Acompanhe o desenvolvimento do seu filho</h1>
        <p className="text-lg text-gray-700 mb-8">
          Tenha acesso a informações essenciais para organizar a rotina escolar do seu filho.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bloco Provas */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-semibold text-orange-500 mb-3">Provas</h2>
            <p className="text-gray-600">Veja datas e acompanhe o desempenho escolar.</p>
          </div>

          {/* Bloco Financeiro */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-semibold text-orange-500 mb-3">Financeiro</h2>
            <p className="text-gray-600">Gerencie mensalidades e pagamentos.</p>
          </div>

          {/* Bloco Organização */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-semibold text-orange-500 mb-3">Organização</h2>
            <p className="text-gray-600">Ajude seu filho a manter uma rotina eficiente.</p>
          </div>

          {/* Bloco App */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-semibold text-orange-500 mb-3">App</h2>
            <p className="text-gray-600">Acesse tudo pelo aplicativo da escola.</p>
          </div>

          {/* Bloco Agenda */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-semibold text-orange-500 mb-3">Agenda</h2>
            <p className="text-gray-600">Fique por dentro das atividades e eventos escolares.</p>
          </div>

          {/* Bloco Cantina */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-semibold text-orange-500 mb-3">Cantina</h2>
            <p className="text-gray-600">Veja o cardápio e faça recargas online.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pais;
