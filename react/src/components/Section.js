import React from "react";
import styled from "styled-components";
import FirstImage from "../assets/texto3.png";
import SecondImage from "../assets/texto4.png";
import { Link } from 'react-router-dom';

const ContentContainer = styled.div`
    margin: 2%;
`;

const TrainingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const TiltleContainer = styled.div`
    text-align: center;
    margin: 2% 0;
`;

const Title = styled.h1`
    font-family: 'Roboto', sans-serif;
`;

const WrapperContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    height: auto;
    display: flex;
    flex-direction: row;
    gap: 4%;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        flex-wrap: wrap;
    }
`;

const WrapperContainerReverse = styled(WrapperContainer)`
    flex-direction: row-reverse;

    @media (max-width: 768px) {
        flex-direction: column;
        flex-wrap: wrap;
    }
`;

const ImageContainer = styled.div`
    width: 50%;  

    @media (max-width: 768px) {
        width: 100%;  
    }
`;

const Image = styled.img`
    width: 100%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ParagraphContainer = styled.div`
    width: 50%;  

    @media (max-width: 768px) {
        width: 100%;  
    }
`;

const Paragraph = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 1.5em;
    line-height: 1.5em;
    text-align: justify;
`;

const Section = () => {
    return (
        <ContentContainer>
            <TrainingContainer>
                <TiltleContainer>
                    <Title>Aprendizado e inclusão</Title>
                </TiltleContainer>
                <WrapperContainer>
                    <ImageContainer>
                        <Image src={FirstImage} alt={""} />
                    </ImageContainer>
                    <ParagraphContainer>
                        <Paragraph>
                            A falta de habilidades em informática pode limitar as oportunidades de muitos. O Conexão FECAP surge para mudar isso, oferecendo cursos práticos em Excel, Word, PowerPoint e mais. Com o apoio de nossos alunos voluntários, estamos determinados a capacitar nossos funcionários, ampliando suas perspectivas de carreira e promovendo um ambiente de aprendizagem inclusivo.
                        </Paragraph>
                    </ParagraphContainer>
                </WrapperContainer>
            </TrainingContainer>
            <TrainingContainer>
                <TiltleContainer>
                    <Title>Transformação Digital</Title>
                </TiltleContainer>
                <WrapperContainerReverse>
                    <ImageContainer>
                        <Image src={SecondImage} alt={""} />
                    </ImageContainer>
                    <ParagraphContainer>
                        <Paragraph>
                            O projeto Conexão FECAP tem como objetivo principal capacitar nossos colaboradores no uso de ferramentas tecnológicas essenciais. Com uma abordagem prática e metodologias eficazes, buscamos empoderar os funcionários, incentivando o desenvolvimento profissional e abrindo portas para novas oportunidades. Junte-se a nós nessa jornada de aprendizado e crescimento!  
                        </Paragraph>
                    </ParagraphContainer>
                </WrapperContainerReverse>
            </TrainingContainer>
        </ContentContainer>
    )
}

export default Section;