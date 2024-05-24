import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const NavBarContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 1em 0;
    
    @media (max-width: 768px) {
        flex-wrap: wrap;
        flex-direction: column;
        align-items: flex-start;
        padding: 0.5em;
    }
`;

const SimpleLinkedContainer = styled.div `
    display: flex;
    gap: 1em;
    margin: 0px 1em;
`;

const StyledLink = styled(Link)`
    color: #202020;
    text-decoration: none;
    &:hover{
        text-decoration: underline;
    }
    @media (max-width: 768px) {
        margin: 0.5em 0;
    }
`;

const ContainerCadastroVoluntary = styled.div`
    display: flex;
    margin-left: auto;
    @media (max-width: 768px) {
        margin-left: 0;
        width: 100%;
        justify-content: space-around;
        flex-wrap: wrap;
    }
`;

const Voluntary = styled.a`
    color: #0def7d;
    text-decoration: none;
    padding: .8em;
    border-radius: 4px;
    margin: 0 1em; 
    border: #0def7d solid 1px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    &:hover {
        background-color: #0def7d;
        color: #f2f2f2;
    }
    @media (max-width: 768px) {
        margin: 0.5em 0;
        width: 100%;
        text-align: center;
    }
`;

const CadastroButton = styled(Link)`
    background-color: #0def7d;
    color: #f2f2f2;
    padding: .8em;
    border: #0def7d solid 1px;
    border-radius: 4px;
    text-decoration: none;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    &:hover{
        color: #0def7d;
        background-color: #f2f2f2;
        padding: .8em;
        border-radius: 4px; 
    }
    @media (max-width: 768px) {
        margin: 0.5em 0;
        width: 100%;
        text-align: center;
    }
`;

function NavBar() {
    return (
        <NavBarContainer>
            <SimpleLinkedContainer>
                <StyledLink  to="/">Home</StyledLink>
                <StyledLink to="/Sobre">Saiba Mais</StyledLink>
            </SimpleLinkedContainer>
            <ContainerCadastroVoluntary>
                <CadastroButton to="/Cadastro">Cadastrar</CadastroButton>
                <Voluntary href="#volunter">Seja Voluntário</Voluntary>
            </ContainerCadastroVoluntary>
        </NavBarContainer>
    );
}

export default NavBar;