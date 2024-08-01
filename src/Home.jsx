import React, { useEffect } from 'react';
import Header from './Header';
import Section from './Section';
import Card from './Card';
import Footer from './Footer';
import SocialIcon from './SocialIcon';
import About from './About';
import Contact from './Contact';
import CvDownload from './CvDownload';
import Project from './Project';


function Home() {
   return(  
    <>
    <Header/>
    <Section/>
    <SocialIcon/>
    <About/>
    <Contact/>
    <CvDownload/>
    
    <Footer/>
    </>
)
}

export default Home;