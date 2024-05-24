import React, { useState } from 'react';
import styled from 'styled-components';
import Axios from "axios";
import Background from "../assets/bg.png"; 

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px;
  background-color: #0def7dc2;
  border-radius: 14px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  margin-bottom: 20px;
  height: auto;
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
   background-color: #0def7d;
    color: #f2f2f2;
    padding: .8em;
    border: #0def7d solid 1px;
    border-radius: 4px;
    text-decoration: none;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    &:hover{
        color: #0def7d;
        background-color: #f2f2f2;
        padding: .8em;
        border-radius: 4px; 
    }
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-image: url(${Background});
  background-size: cover;
  background-position: center;
`;

function CadastroBody() {
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

export default CadastroBody;
