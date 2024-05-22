import React from 'react';
import NavBar from './NavBar';
import styled from 'styled-components';


const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-around;
    align-Items: center;
    color: #fff;
    font-weight: bold;
    padding: 10px 20px;
    width: auto;
`;

function Header(){
    return(
        <HeaderContainer>
            <NavBar/>
        </HeaderContainer>
    );
}

export default Header;