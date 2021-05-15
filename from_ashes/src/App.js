import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import HomeContent from './components/HomeContent';

import './App.css';
import AboutContent from './components/AboutContent';



class App extends Component {


    render() {

        return (
            <div className="App">
                <Header />

                
                <div class="container">
                    <AboutContent />
                </div>


                <Footer />
            </div>
        );
    }
}

export default App;
