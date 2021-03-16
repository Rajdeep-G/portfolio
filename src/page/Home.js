import React from 'react';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Hero from '../components/Hero'
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import AllProjects from '../components/AllProjects';
const Home = () => {
    return (
        <div>
            <Navbar />
            <div>
                <Hero />
            </div>
            <div>
                <AllProjects />
            </div>
            <div>
                <Experience />
            </div>
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