import React, { Component } from 'react';
import TopNavbar from './TopNavbar';
// import logo from '../../public/assets/img/phoenix.png';




class header extends Component {
    render() {
        return (
            <React.Fragment>
                <header className="jumbotron p-0 pt-1 m-0 rounded-0">
                    <div className="container container-fluid">
                        <div className="row justify-content-center">
                            <div className="col col-4 col-sm-3 col-md-2 align-self-center d-none d-sm-block">
                                <a href="index.html"><img src="assets/img/phoenix.png" alt="logo" className="img-fluid d-none d-md-block" /></a>
                            </div>
                            <div className="mx-auto">
                                <a href="index.html" className="text-decoration-none"><h1 className="font-weight-bold text-center">From Ashes</h1>
                                    <h2>Kil'jaeden - Horde</h2></a>
                            </div>
                            <div className="col-4 col-sm-3 col-md-2 align-self-center d-none d-sm-block">
                                <a href="index.html"><img src="assets/img/phoenix.png" alt="logo" className="img-fluid d-none d-md-block" /></a>

                            </div>
                        </div>
                    </div>
                </header>
                <TopNavbar />

            </React.Fragment>
        );
    }
}

export default header;