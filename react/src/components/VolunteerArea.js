import React, {useState} from "react";
import styled from "styled-components";
import axios from "axios";
import '../FontsStyle.css';

const ContentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #0def7d87;
    padding: 20px;
    @media (max-width: 768px) {
        width: 90%;
    }
`;

const WrapperContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    margin: 4%;
    gap: 2.5%;

    @media (min-width: 768px) {

        flex-direction: row;
    }
`;

const ImageContainer = styled.div`
    width: 100%;
    height: auto;
    padding: 0px 4%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 4%;

    @media (min-width: 768px) {
        width: 50%;
    }
`;

const TextContainer = styled.div`
    text-align: center;
    margin: 2% 0px -2% 0px;
`;

const SubTitle = styled.div`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 2em;
`;

const Paragraph = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 1.2em;
    font-weight: bold;
`;

const InfoTextArea = styled.div`
    width: 100%;
    max-width: 500px;
    height: auto;
`;

const SubParagraph = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 1.2em;
    line-height: 1.5em;
    text-align: justify;
`;

const ContainerForm = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    justify-content: center;
    margin: 2% 0px;
    padding: 0 4%;

    @media (min-width: 768px) {
        width: 50%;
        justify-content: flex-start;
        padding-right: 4%;
    }
`;

const Form = styled.form`
    background-color: #EED9C4;
    border-radius: 4px;
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    padding: 4%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    @media (min-width: 768px) {
        width: 100%;
    }
`;

const Label = styled.label`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    margin: 0px 0px 1% 0%;
`;

const Input = styled.input`
    margin-bottom: 1em;
    padding: 0.5em;
    border: none;
    border-radius: 2px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 81%;
`;

const TextArea = styled.textarea`
    height: 100%;
    max-height: 400px;
    width: 80%;
    padding: 10px;
    margin-bottom: 2%;
    font-family: 'Roboto', sans-serif;
    font-size: 1em;
    color: #202020;
    background-color: #ffff;
    border: none;
    border-radius: 4px;
    resize: none;
    outline: none;
    scroll-behavior: auto;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ButtonContainer = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    justify-content: flex-start;
`;

const Button = styled.button`
    background-color: #0def7d;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: #f2f2f2;
    padding: 0.8em;
    border: #0def7d solid 1px;
    border-radius: 4px;
    text-decoration: none;
    cursor: pointer;
    width: 100%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    &:hover {
        color: #0def7d;
        background-color: #f2f2f2;
        border-radius: 4px;
    }

    @media (min-width: 768px) {
        width: 20%;
    }
`;

const ContentVolunterArea = () => {

            const [formData, setFormData] = useState({
                nome: "",
                email: "",
                message: ""
            });

            const handleChange = (e) => {
                const { name, value } = e.target;
                setFormData(prevState => ({
                    ...prevState,
                    [name]: value
                }));
            };

            const handleSubmit = (e) => {
                e.preventDefault();
                axios.post("http://localhost:3001/registro/voluntario", formData)
                    .then(response => {
                        console.log(response.data);
                        alert("Dados inseridos com sucesso");
                    })
                    .catch(error => {
                        console.error("Erro ao enviar os dados:", error);
                        alert("Erro ao inserir dados");
                    });
            };

    return (
        <ContentContainer id="volunter">
            <WrapperContainer>
                <ImageContainer>
                    <TextContainer>
                        <SubTitle> Seja Voluntário </SubTitle>
                        <Paragraph>Garanta horas complementares</Paragraph>
                    </TextContainer>
                    <InfoTextArea>
                        <SubParagraph>Você sabia que ser voluntário pode trazer inúmeros benefícios pessoais e profissionais? Além de ajudar a comunidade e desenvolver habilidades valiosas, o voluntariado pode contar como horas complementares para a sua formação acadêmica. Venha descobrir como você pode transformar seu tempo livre em uma experiência enriquecedora e vantajosa!</SubParagraph>
                    </InfoTextArea>
                </ImageContainer>
                <Form action="/submit" method="POST">
                        <Label htmlFor="nome">Nome Completo</Label>
                        <Input maxLength="40" type="text" id="nome" name="nome" required onChange={handleChange} />

                        <Label htmlFor="email">Email</Label>
                        <Input maxLength="40" type="email" id="email" name="email" required onChange={handleChange} />

                        <Label htmlFor="YourExperience">Suas experiências</Label>
                        <TextArea type="text" id="message" name="message" required onChange={handleChange} />

                        <Button onClick={handleSubmit}>Cadastrar</Button>
                    </Form>
            </WrapperContainer>
        </ContentContainer>
    );
}

export default ContentVolunterArea;
