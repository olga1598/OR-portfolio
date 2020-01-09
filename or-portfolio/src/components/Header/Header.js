import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import "./Header.css";


    class Header extends Component {
        state = {
            collapsed: true,
        };
    
        toggleNavbar = () => {
            this.setState({
                collapsed: !this.state.collapsed,
            });
        }
    
        hideNavbar = () => {
            this.setState({
                collapsed: true,
            });
        }
    
        render () {
            const collapsed = this.state.collapsed;
            const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
            const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
    
            return (
                <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                    <div className="logo">
                        <NavLink to="/" exact className="name">OR</NavLink>
                    </div>

                    <button className={`${classTwo}`} onClick={this.toggleNavbar} type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`${classOne}`} id="navbarToggler">

                        <ul className="navbar-nav mr-auto" onClick={this.hideNavbar}>
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link" exact>HOME</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link">ABOUT ME</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/portfolio" className="nav-link">PORTFOLIO</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contacts" className="nav-link">CONTACTS</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
    )
}
}

export default Header
