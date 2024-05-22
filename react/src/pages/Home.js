import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Body from '../components/BodyHome'
import HomeCarousel from '../components/Carousel';
function Home(){
    return(
        <div>
            <Header/>
            <HomeCarousel/>
            <Body/>
            <Footer/>
        </div>
    );
}

export default Home;