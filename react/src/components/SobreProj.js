import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import FooterFromAbout from './FooterFromAbout';
import fecapCarousel from '../assets/sobreimage.png';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 15%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 20px;
  max-height: 50%;
`;

const HomeLink = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #0def7d;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  border: #0def7d solid 1px;
  box-shadow: 0, 4px, 6px, rgba(0, 0, 0, 0.1);

  &:hover {
    color: #0def7d;
        background-color: #f2f2f2;
        padding: 10px 20px;
        border-radius: 4px; 
  }
`;

const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2em;
  color: #333;
  text-align: center;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.5em;
  color: #555;
  margin-top: 30px;
  color: black;
`;

const Paragraph = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1.5em;
  line-height: 1.5em;
  text-align: justify;
`;

const List = styled.ul`
  list-style-type: disc;
  margin-left: 20px;
  color: #666;
`;

const ListItem = styled.li`
  margin: 10px 0;
  text-align: justify;
  font-size: 1.5em;
`;

const TitleCF = styled.h1`
  font-size: 2em;
  color: #0def7d;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
`;

const SobreProj = () => {
  return (
    <div>
      <Header />
      <PageContainer>
        <Content>
          <TitleCF>Conexão FECAP</TitleCF>
          <Image src={fecapCarousel} alt="FECAP Carousel" />
          <Container>
            <Title> Capacitando Funcionários para um Futuro Melhor</Title>
            <Paragraph>
              A FECAP (Fundação Escola de Comércio Álvares Penteado), sempre comprometida com a educação e o desenvolvimento de seus colaboradores, lançou um projeto inovador e transformador: o Conexão FECAP. Este projeto visa proporcionar educação em informática básica aos funcionários que ocupam cargos de nível operacional dentro da instituição. A iniciativa tem como principal objetivo capacitar esses colaboradores, ampliando suas possibilidades de crescimento profissional, tanto dentro quanto fora da FECAP.
            </Paragraph>

            <SectionTitle>Objetivos do Projeto</SectionTitle>
            <Paragraph>O Conexão FECAP foi criado com a missão de transformar vidas por meio da educação. Reconhecendo a importância da inclusão digital, o projeto busca:</Paragraph>
            <List>
              <ListItem>Desenvolvimento de Competências: Oferecer cursos de informática básica que abranjam desde a introdução ao uso do computador até habilidades mais avançadas, como o uso de planilhas eletrônicas, processamento de texto e navegação na internet.</ListItem>
              <ListItem>Inclusão Digital: Promover a inclusão digital dos funcionários, permitindo que eles acompanhem as demandas tecnológicas do mercado de trabalho atual.</ListItem>
              <ListItem>Oportunidades de Crescimento: Preparar os colaboradores para novas oportunidades de emprego e promoção dentro da própria FECAP, bem como no mercado de trabalho em geral.</ListItem>
            </List>

            <SectionTitle>Estrutura do Projeto</SectionTitle>
            <Paragraph>O Conexão FECAP é estruturado de maneira a garantir que todos os participantes recebam uma formação completa e eficaz. Os cursos são ministrados por professores e alunos voluntários da FECAP, criando um ambiente colaborativo e de aprendizado mútuo. A estrutura do projeto inclui:</Paragraph>
            <List>
              <ListItem>Aulas Presenciais: Flexibilidade de horário para que os funcionários possam participar das aulas de acordo com suas disponibilidades.</ListItem>
              <ListItem>Laboratórios de Informática: Utilização dos laboratórios de informática da FECAP para aulas práticas, garantindo que os colaboradores tenham acesso a equipamentos modernos e funcionais.</ListItem>
              <ListItem>Avaliações e Certificação: Realização de avaliações periódicas para monitorar o progresso dos alunos e certificação ao final do curso, comprovando a conclusão e as competências adquiridas.</ListItem>
            </List>

            <SectionTitle>Impacto Esperado</SectionTitle>
            <Paragraph>Com o Conexão FECAP, espera-se que os funcionários da instituição não apenas melhorem suas habilidades técnicas, mas também ganhem confiança para buscar novas oportunidades de crescimento. O projeto tem o potencial de:</Paragraph>
            <List>
              <ListItem>Aumentar a Produtividade: Funcionários mais capacitados tendem a ser mais eficientes e produtivos em suas funções atuais.</ListItem>
              <ListItem>Promover a Mobilidade Interna: Capacitar colaboradores para que possam ser promovidos a cargos que exigem maior conhecimento técnico.</ListItem>
              <ListItem>Ampliar Oportunidades Externas: Oferecer uma formação que possibilite aos participantes concorrer a melhores empregos fora da instituição, melhorando sua qualidade de vida.</ListItem>
            </List>

            <SectionTitle>Conclusão</SectionTitle>
            <Paragraph>O Conexão FECAP é um projeto que reafirma o compromisso da FECAP com a educação e o desenvolvimento humano. Ao oferecer aos seus colaboradores a oportunidade de aprender e se aprimorar, a instituição não só fortalece seu corpo funcional, mas também contribui para a construção de uma sociedade mais justa e igualitária. Através da inclusão digital e da capacitação profissional, o Conexão FECAP está preparando o caminho para um futuro com mais oportunidades e realizações para todos.</Paragraph>
          </Container>
          <HomeLink to="/">Voltar para Home</HomeLink>
        </Content>
      </PageContainer>
      <FooterFromAbout />
    </div>
  );
};

export default SobreProj;
