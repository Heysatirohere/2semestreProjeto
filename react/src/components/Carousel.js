import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from 'react-responsive-carousel'
import fecapCarousel from '../assets/imgCarousel/fecap.png'
import image2 from '../assets/img3.png'
import image3 from '../assets/img2.png'
import styled from "styled-components";

const cardEdit = styled.div `
    width: 60%;
    padding: 0 50px;
    margin-top: 2em;
    margin-left: 150px;
`;

const CarouselContainer = styled.div`
    width: 100%;
    max-width: 800px; /* Adjust the max width as needed */
    margin: 0 auto;
    padding: 20px 0;
`

const Image = styled.img `
    width: 60%;
    height: auto;
`;


const HomeCarousel = () => {
    return (
    <CarouselContainer>
        <Carousel autoPlay interval={2000} infiniteLoop showThumbs={false} style = {("height: 40%;")}>
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