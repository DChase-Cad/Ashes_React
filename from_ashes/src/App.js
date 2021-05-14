import React, { Component} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Temp from './components/100vhTemp';
import HomeCarousel from './components/HomeCarousel';

function App() {
    return (
        
        <div>
            <Header />
            <Temp />
            <HomeCarousel />
            <Footer />
        </div>
    );
}

export default App;
