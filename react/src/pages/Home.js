import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeCarousel from '../components/Carousel';
import MainContent from '../components/Main';
import ContentVolunterArea from '../components/VolunteerArea';
import Section from '../components/Section';


function Home(){
    return(
        <div>
            <Header/>
            <HomeCarousel/>
            <MainContent/>
            <ContentVolunterArea/>
            <Section/>
            <Footer/>

        </div>
    );
}

export default Home;