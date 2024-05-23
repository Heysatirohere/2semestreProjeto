import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from 'react-responsive-carousel'
import fecapCarousel from '../assets/imgCarousel/fecap.png'
import image2 from '../assets/img3.png'
import image3 from '../assets/img2.png'
import styled from "styled-components";

const CardEdit = styled.div `
    width: 80%;
    padding: 0 50px;
    margin-top: 2em;
    margin-left: 150px;
`;

const CarouselContainer = styled.div`
    width: 100%;
    max-width: 1000px; 
    margin: 0 auto;
    padding: 20px 0;
`

const Image = styled.img `
    width: 100%;
    height: auto;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
`;


const HomeCarousel = () => {
    return (
    <CarouselContainer>
        <Carousel autoPlay interval={4000} infiniteLoop showThumbs={false} style = {("height: 40%;")}>
            <cardEdit>
                <Image src={fecapCarousel} alt={""} />
            </cardEdit>
            <cardEdit>
                <Image src={image2} alt={""} />
            </cardEdit>
            <cardEdit>
                <Image src={image3} alt={""} />
            </cardEdit>
        </Carousel>
    </CarouselContainer>
    )
}

export default HomeCarousel;