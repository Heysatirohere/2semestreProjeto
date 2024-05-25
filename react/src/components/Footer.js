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

const LinksEmail = styled(Link) `
  text-decoration: none;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-weight:bold;
  &:Hover {
    color: #202020;
    text-decoration: underline;
  }
`;



function Footer() {
  return (
    <FooterContainer>
      <FooterItem>Telefone: +55 (11) 95217-4000</FooterItem>
      <FooterItem>Email:<LinksEmail href="david.lemes@fecap.br"> david.lemes@fecap.br</LinksEmail></FooterItem>
      <FooterItem><Links href="https://www.fecap.br/" target='_blank'>Site FECAP</Links></FooterItem>
    </FooterContainer>
  );
}

export default Footer;
