import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const NavBarContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 1em 0;
`;

const StyledLink = styled(Link)`
    color: #202020;
    text-decoration: none;
    margin: 0 1em;
    &:hover{
        text-decoration: underline;
    }
`;

const Voluntary = styled(Link) `
    color: #0def7d;
    text-decoration: none;
    padding: .8em;
    border-radius: 4px;
    margin: 0 1em; 
     border: #0def7d solid 1px;
     &:hover {
        background-color: #0def7d;
        color: #f2f2f2;
     }
`;

const CadastroButton = styled(Link) `
    background-color: #0def7d;
    color: #f2f2f2;
    padding: .8em;
    border: #0def7d solid 1px;
    border-radius: 4px;
    text-decoration: none;
    &:hover{
        color: #0def7d;
        background-color: #f2f2f2;
        padding: .8em;
        border-radius: 4px; 
    }
`;

function NavBar(){
    return(
        <NavBarContainer>
            <StyledLink to="/">Home</StyledLink>
            <CadastroButton to={"/Cadastro"}>Cadastrar</CadastroButton>
            <Voluntary>Seja Voluntário</Voluntary>
        </NavBarContainer>
    );
}

export default NavBar;