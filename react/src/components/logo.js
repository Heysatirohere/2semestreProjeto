import React from "react";
import LogoSGV from '../assets/logo-fecap-verde.svg';
import styled from "styled-components";

const ContentContainer = styled.div `
   
`;

const Image = styled.img `
    width: 60%;
    height: auto;
`;


const LogoContainer = () => {
    return (
    <ContentContainer>
        <Image src={LogoSGV} alt={""} />
    </ContentContainer>
    )
}

export default LogoContainer;