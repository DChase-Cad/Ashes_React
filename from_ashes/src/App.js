import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import HomeContent from './components/HomeContent';

import './App.css';



class App extends Component {


    render() {

        return (
            <div className="App">
                <Header />
                <HomeContent />
                <Footer />
            </div>
        );
    }
}

export default App;
