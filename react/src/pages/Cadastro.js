import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import CadastroBody from '../components/Voluntario';
function Cadastro(){
    return(
        <div>
            <Header/>
            <Banner/>
            <CadastroBody/>
            <Footer/>
        </div>
    );
}
export default Cadastro;