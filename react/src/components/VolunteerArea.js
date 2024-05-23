import React from "react";
import styled from "styled-components";
import ImageVolunteer from "../assets/imageVoluntario.png"

const Input = styled.input`
  margin-bottom: 1em;
  padding: 0.5em;
  border: 1px solid #ccc;
  border-radius: 5px;
`;


const ContentVolunterArea = () => {
    return (
        <div>
            <div>
                <img src={ImageVolunteer} alt={""} />
            </div>
            <div>
                <h2> Seja Voluntario </h2>
                <p>Garanta horas complementares</p>
            </div>
            <div>
                <form action="/submit" method="POST">
                    <label for="name">Nome:</label>
                    <Input maxLength="40" type="text" id="nome" name="nome"/>

                    <label for="email">Email:</label>
                    <Input maxLength="40" type="email" id="email" name="email"/>

                    <label for="message">Mensagem:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>

                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
}

            export default ContentVolunterArea;