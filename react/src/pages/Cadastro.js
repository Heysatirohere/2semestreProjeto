import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CadastroBody from '../components/Voluntario';
function Cadastro(){
    return(
        <div>
            <Header/>
            <CadastroBody/>
            <Footer/>
        </div>
    );
}
export default Cadastro;