import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import About from './components/About/About';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <HeroSection />
            <About />
            <Services />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
