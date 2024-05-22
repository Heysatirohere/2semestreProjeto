import React from 'react';
import styled from 'styled-components';

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
