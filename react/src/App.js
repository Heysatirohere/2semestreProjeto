import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import './FontsStyle.css'
import GlobalStyles from './styles/GlobalStyle';
import Sobre from './pages/Sobre';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Sobre" element={<Sobre/>} />
      </Routes>
    </Router>
  );
}

export default App;
