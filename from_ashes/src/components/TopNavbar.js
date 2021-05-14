import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
// import logo from '../../public/assets/img/phoenix.png';;

const TopNavbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
            
            <Navbar className="navbar-dark" light expand='md' sticky='top'>
                <NavbarBrand className="d-md-none" href="/"><img src="assets/img/phoenix.png" height="30" width="30" /></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem className="nav-item ml-4 active"><a className="nav-link" href="#"><i className="d-none d-md-inline fa fa-home fa-lg"></i> Home</a></NavItem>
                             <NavItem className="nav-item ml-4"><NavLink className="nav-link" href="aboutUs.html"><i className="d-none d-md-inline fa fa-info fa-lg"></i> About</NavLink></NavItem>
                             <NavItem className="nav-item ml-4"><NavLink className="nav-link" href="classResources.html"><i className="d-none d-md-inline fa fa-users fa-lg"></i> Class Resources</NavLink></NavItem>
                             <NavItem className="nav-item ml-4"><NavLink className="nav-link" href="gallery.html"><i className="d-none d-md-inline fa fa-list fa-lg"></i> Gallery</NavLink></NavItem>
                       <NavItem className="nav-item ml-4"><NavLink className="nav-link" href="mailto:"><i className="d-none d-md-inline fa fa-address-card fa-lg"> </i> Contact</NavLink></NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        
    );
}

export default TopNavbar;






















// import React, { Component , useState} from 'react';
// import {Navbar,NavbarBrand,NavbarToggler,Collapse, NavItem,NavLink,NavbarText} from 'reactstrap';
// import logo from '../img/phoenix.png';

// class TopNavbar extends Component {
//     const Example = (props) => {
//         const [isOpen, setIsOpen] = useState(false);
//         const toggle = () => setIsOpen(!isOpen);}

//     render() {
//         return (

//             <Navbar className="navbar-expand-sm navbar-dark sticky-top">
//                 <div className="container col">
//                     <NavbarBrand className="d-sm-none" href="#"><img src={logo} height="30" width="30" /></NavbarBrand>
//                     <NavbarToggler onClick={toggle} />
//                     <Collapse className="navbar-collapse text-nowrap" id="ashesNavbar">
//                         <ul className="navbar-nav col justify-content-end">
//                             <NavItem className="nav-item ml-5 active"><a className="nav-link" href="#"><i className="fa fa-home fa-lg"></i> Home</a></NavItem>
//                             <NavItem className="nav-item ml-5"><NavLink className="nav-link" href="aboutUs.html"><i className="fa fa-info fa-lg"></i> About</NavLink></NavItem>
//                             <NavItem className="nav-item ml-5"><NavLink className="nav-link" href="classResources.html"><i className="fa fa-users fa-lg"></i> Class Resources</NavLink></NavItem>
//                             <NavItem className="nav-item ml-5"><NavLink className="nav-link" href="gallery.html"><i className="fa fa-list fa-lg"></i> Gallery</NavLink></NavItem>
//                             <NavItem className="nav-item ml-5"><NavLink className="nav-link" href="mailto:"><i className="fa fa-address-card fa-lg"></i> Contact</NavLink></NavItem>
//                         </ul>
//                     </Collapse>
//                 </div>
//             </Navbar>

//         );
//     }
// }

// export default TopNavbar;