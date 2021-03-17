import React from 'react';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Hero from '../components/Hero'
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import AllProjects from '../components/AllProjects';
import { Element } from "react-scroll";
import ScrollToTop from "react-scroll-to-top";
const Home = () => {
    return (
        <div>
            <ScrollToTop smooth />
            <Navbar />
            <Element name="Hero"></Element>
            <div>
                <Hero />
            </div>
            <Element name="AllProjects"></Element>
            <div>
                <AllProjects />
            </div>
            <Element name="Experience"></Element>
            <div>
                <Experience />
            </div>
            <Element name="Contact"></Element>
            <div>
                <Contact />
            </div>
            <div>
                <Footer />
            </div>

        </div>
    )
}
export default Home;