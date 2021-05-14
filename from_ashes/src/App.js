import React, { Component} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Temp from './components/100vhTemp';
// import HomeCarousel from './components/HomeCarousel';
import {HOMECAROUSELIMAGES} from './shared/HomeCarouselItems';
import './App.css';
import HomeCarousel from './components/HomeCarousel';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: HOMECAROUSELIMAGES
        };
    }

    render() {

        return (
            <div className="App">
                <Header />
                <Temp />
                <HomeCarousel img={this.state.img}/>
                <Footer />
            </div>
        );
    }
}

export default App;
