import React from 'react';
import NavBar from './NavBar';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-Items: center;
    background-color: #28a745;
    color: #fff;
    font-weight: bold;
    padding: 10px 20px;
    width: auto;
`;

function Header(){
    return(
        <HeaderContainer>
            <div>FECAP</div>
            <NavBar/>
        </HeaderContainer>
    );
}

export default Header;