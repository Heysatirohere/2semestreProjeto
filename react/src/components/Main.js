import React from "react";
import styled from "styled-components";
import FirstImage from "../assets/texto1.png";
import SecondImage from "../assets/texto2.png";
import ThirdImage from "../assets/texto3.png";

const ContentContainer = styled.div `
    margin: 2%;
`;

const TrainingContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const TiltleContainer = styled.div `
    text-align: center;
    margin: 2% 0;
`;

const Title = styled.h1 `
    font-family: 'Roboto', sans-serif;
`;

//Style do container que contem o container da imagem e o paragrafo
const WrapperContainer = styled.div `
    width: 100%;
    max-width: 1200px;
    height: auto;
    display: flex;
    flex-direction: row;
    gap: 4%;
`;

const WrapperContainerReverse = styled.div `
    width: 100%;
    max-width: 1200px;
    height: auto;
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    gap: 4%;
`;


//Estilizando o container da imagem e a imagem
const ImageContainer = styled.div `
    width: 100%;
    
`;

const Image = styled.img `
    width: 100%;
`;

//Estilo do paragrafo e do seu container
const ParagraphContainer = styled.div `

`;

const Paragraph = styled.p `
    font-family: 'Roboto', sans-serif;
    font-size: 1.5em;
    line-height: 1.5em;
    text-align: justify;
`;

const MainContent = () => {
    return (
        <ContentContainer>
            <TrainingContainer>
                <TiltleContainer>
                    <Title>Capacitação Tecnológica</Title>
                </TiltleContainer>
                <WrapperContainer>
                    <ImageContainer>
                        <Image src={FirstImage} alt={""} />
                    </ImageContainer>
                    <ParagraphContainer>
                        <Paragraph>
                            O Conexão FECAP é uma iniciativa dedicada a capacitar os funcionários da nossa instituição no uso de tecnologia. Com o  apoio de alunos voluntários, oferecemos cursos de informática básica para ajudar nossos colaboradores a expandirem seus  conhecimentos e habilidades, promovendo seu crescimento profissional.
                        </Paragraph>
                    </ParagraphContainer>
                </WrapperContainer>
            </TrainingContainer>
            <TrainingContainer>
                <TiltleContainer>
                    <Title>Oportunidades de Crescimento</Title>
                </TiltleContainer>
                <WrapperContainerReverse>
                    <ImageContainer>
                        <Image src={SecondImage} alt={""} />
                    </ImageContainer>
                    <ParagraphContainer>
                        <Paragraph>
                            Este projeto visa preencher a lacuna de conhecimento tecnológico entre os funcionários de níveis mais baixos da FECAP. Ao capacitar esses colaboradores, proporcionamos a eles a oportunidade de competir por vagas melhores, tanto dentro quanto fora da instituição. Os alunos voluntários, por sua vez, são recompensados com horas complementares por sua dedicação.        
                        </Paragraph>
                    </ParagraphContainer>
                </WrapperContainerReverse>
            </TrainingContainer>
        </ContentContainer>
    )
}

export default MainContent;
