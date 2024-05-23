import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #28a745;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 2em;
  color: #fff;
`;

const ColaboradorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Colaborador = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  border-right: 1px solid #ccc;

  &:last-child {
    border-right: none;
  }
`;

const Nome = styled.h3`
  margin: 0;
  font-size: 1.2em;
`;

const RA = styled.p`
  margin: 5px 0;
`;

const FooterItem = styled.h1`
  flex: 1;
  text-align: center;

  margin: 0.5em 0;
`;

function FooterFromAbout() {
    const Colaboradores = [
        { nome: 'Wellington de Aguiar Oliveira', RA: 23025662 },
        { nome: 'Marcelo Henrrique de Souza', RA: 23025665 },
        { nome: 'Sátiro Gabriel de Souza Santos ', RA: 23025414 },
      ];
    
  return (
    <FooterContainer>
      <FooterItem>Conexão FECAP</FooterItem>
      <ColaboradorContainer>
          {Colaboradores.map((colaborador, index) => (
                <Colaborador key={index}>
                  <Nome>{colaborador.nome}</Nome>
                  <RA>RA: {colaborador.RA}</RA>
                </Colaborador>
              ))}
      </ColaboradorContainer>
    </FooterContainer>
  );
}

export default FooterFromAbout;