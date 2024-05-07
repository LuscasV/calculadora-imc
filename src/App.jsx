import React, { useState, useEffect } from "react";
import TabelaIMC from "./components/Tabela/Index";
import Perfil from "./components/Perfil/index";
import Formulario from "./components/Formulario/index"; // Adicionei a importação do componente Formulario

function App() {
  return (
    <>
      <div className="divBlock">
        <Perfil />
        <section id="result">
        <Formulario />
          <section id="reference-table">
            <TabelaIMC />
          </section>
        </section>
      </div>
    </>
  );
}

export default App;