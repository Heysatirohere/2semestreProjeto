import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #28a745;
  display: flex;
  justify-content: space-evenly;
  padding: 2em;
  color: #fff;
  list-style: none;
  width: auto;
`;

const FooterItem = styled.li`
  flex: 1;
  text-align: center;
  min-width: 150px;
  margin: 0.5em 0;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterItem>Telefone: </FooterItem>
      <FooterItem>Gmail: </FooterItem>
      <FooterItem>Site FECAP</FooterItem>
    </FooterContainer>
  );
}

export default Footer;
