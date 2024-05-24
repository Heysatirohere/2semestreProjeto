import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: #28a745;
  display: flex;
  justify-content: space-evenly;
  padding: 2em;
  color: #fff;
`;

const FooterItem = styled.li`
  flex: 1;
  text-align: center;
  list-style: none;
  margin: 0.5em 0;
`;

const Links = styled(Link) `
  text-decoration: none;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-weight:bold;
  text-transform: uppercase ;
  &:Hover {
    color: #202020;
    text-decoration: underline;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterItem>Telefone: </FooterItem>
      <FooterItem>Gmail: </FooterItem>
      <FooterItem><Links href="https://www.fecap.br/" target='_blank'>Site FECAP</Links></FooterItem>
    </FooterContainer>
  );
}

export default Footer;
