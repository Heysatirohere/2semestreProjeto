import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    background-color: #28a745;
    display: flex;
    justify-content: space-evenly;
    padding: 2.0em;
    color: #fff;
    list-style: none;
    
`;


function Footer(){
    return(
        <FooterContainer>
       
          <li>Telefone: </li>
          <li>Gmail:</li>
          <li>Site FECAP</li> 
 
        </FooterContainer>
    );
}

export default Footer;