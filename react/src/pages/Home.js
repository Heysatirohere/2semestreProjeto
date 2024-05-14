import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Body from '../components/BodyHome'

function Home(){
    return(
        <div>
            <Header/>
            <Banner/>
            <Body/>
            <Footer/>
        </div>
    );
}

export default Home;