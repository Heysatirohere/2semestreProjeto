import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';


import GlobalStyles from './styles/GlobalStyle';

function App() {
  return (
    <Router>
      <GlobalStyles/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Cadastro" element={<Cadastro />}/>
      </Routes>
    </Router>
  );
}

export default App;
