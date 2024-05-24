import React, { useState } from 'react';
import styled from 'styled-components';
import Axios from "axios";
import BackGound from "../assets/bg.png";

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
  height: auto;
`;

function AlunoForm() {
  const [values, setValues] = useState({});

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue, [value.target.name]: value.target.value,
    }));
  };

  const handleClickButton = (e) => {
    e.preventDefault();

    const telefone = values.telefone;
  
    if (!/^\d{11}$/.test(telefone)) {
      alert("Este campo precisa conter 11 dígitos");
      return;
    }

    Axios.post("http://localhost:3001/registro/padrao", {
      nome: values.nome,
      email: values.email,
      telefone: values.telefone,
    }).then((response) => {
      console.log(response);
      alert("Dados inseridos com sucesso");
    }).catch((error) => {
      console.error("Erro ao enviar os dados:", error);
      alert("Erro ao inserir dados");
    });
  };

  return (
    <Main>
      <FormContainer>
        <h2>Cadastro</h2>
        <Form>
          <Label htmlFor="nome">Nome Completo</Label>
          <Input maxLength="40" type="text" id="nome" name="nome" required onChange={handleChangeValues} />

          <Label htmlFor="email">Email</Label>
          <Input maxLength="40" type="email" id="email" name="email" required onChange={handleChangeValues} />

          <Label htmlFor="telefone">Telefone</Label>
          <Input maxLength="11" type="tel" onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }} id="telefone" name="telefone" required onChange={handleChangeValues} />

          <Button onClick={handleClickButton}>Cadastrar</Button>
        </Form>
      </FormContainer>
    </Main>
  );
}

export default AlunoForm;