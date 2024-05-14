import styled from "styled-components";
import fecap from "../assets/fecap.png"

const BannerContainer = styled.div`
    background-image: url(${fecap});
    height: 300px;
    background-size:cover;
    display: flex;
    justify-content: center;
    align-items:center;
    font-size:2em;
    color: green;
`;

function Banner(){
    return(
        <BannerContainer>
            <p>FECAP</p>
        </BannerContainer>
    );
}

export default Banner;