import React from 'react';
import styled from 'styled-components';

// Definindo os estilos para os componentes do formulário
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px;
  background-color: #f9f9f9;
  border-radius: 14px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.5em;
  color: #333;
`;

const Input = styled.input`
  margin-bottom: 1em;
  padding: 0.5em;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 0.75em;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
`;

function CadastroBody() {
  return (
    <Main>
      <FormContainer>
        <h2>Cadastro</h2>
        <Form>
          <Label htmlFor="nome">Nome Completo</Label>
          <Input maxLength="40" type="text" id="nome" name="nome" required />

          <Label htmlFor="email">Email</Label>
          <Input maxLength="40" type="email" id="email" name="email" required />

          <Label htmlFor="telefone">Telefone</Label>
          <Input maxLength="12" type="tel" id="telefone" name="telefone" required />

          <Label htmlFor="cpf">CPF</Label>
          <Input maxLength="10" type="text" id="cpf" name="cpf" required />

          <Button type="submit">Cadastrar</Button>
        </Form>
      </FormContainer>
    </Main>
  );
}

export default CadastroBody;
