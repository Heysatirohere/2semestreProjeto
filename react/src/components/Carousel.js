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

const HomeCarousel = () => {
    <Carousel autoPlay interval={2000} infiniteLoop showThumbs={false}>
        <cardEdit>
            <img src={fecapCarousel} alt={""} />
        </cardEdit>
        <cardEdit>
            <img src={image2} alt={""} />
        </cardEdit>
        <cardEdit>
            <img src={image3} alt={""} />
        </cardEdit>
    </Carousel>
}

export default HomeCarousel;