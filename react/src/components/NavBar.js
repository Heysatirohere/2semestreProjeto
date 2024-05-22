import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 0;
`;

const StyledLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin: 0 1em;
    &:hover{
        text-decoration: underline;
    }
`;

const Voluntary = styled(Link) `
    color: #fff;
    text-decoration: none;
    margin: 0 1em; 
     border: #0def7d solid 1px;
`;

function NavBar(){
    return(
        <NavBarContainer>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/Cadastro">Cadastro</StyledLink>

            <Voluntary>Seja Voluntário</Voluntary>
        </NavBarContainer>
    );
}

export default NavBar;