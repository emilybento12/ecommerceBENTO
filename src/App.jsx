import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importação do React Router
import NavBar from "./components/NavBar";

const Home = () => <h1>Bem-vindo a página inicial</h1>;
const Contato = () => <h1>Fale Conosco</h1>;
const Produtos = () => <h1>Veja nossos produtos</h1>;

function App() {
  return (
    <Router>

      <NavBar />
      
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/produtos" element={<Produtos />} />
      </Routes>
    </Router>
  );
}

export default App;
