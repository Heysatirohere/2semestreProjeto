import React from 'react';
import NavBar from './NavBar';
import styled from 'styled-components';
import LogoContainer from '../components/logo';


const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-around;
    align-Items: center;
    color: #fff;
    font-weight: bold;
    padding: 10px 20px;
    width: auto;
    border-bottom: 1px solid #0def7d;
`;

function Header(){
    return(
        <HeaderContainer>
            <LogoContainer/>
            <NavBar/>
        </HeaderContainer>
    );
}

export default Header;