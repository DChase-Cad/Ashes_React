import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import HomeContent from './HomeContent';
import AboutContent from './AboutContent';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

export default class MainComponent extends Component {
    render() {
        return (
            <BrowserRouter>
            <div className="App mx-auto">
                <Header />

                
                <div className="container home-width">
                <Switch>
                    <Route path='/home' component={HomeContent} />
                    <Route exact path='/aboutus' component={AboutContent} />
                    <Redirect to='/home' />
                </Switch>
                </div>


                <Footer />
            </div>
            </BrowserRouter>
        )
    }
}
