import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';

class Header extends Component {
    render() {
        return (
        <div className="header" style={{display: 'flex', flexFlow: 'column nowrap', alignItems: 'center', textAlign: 'center'}}>
            <h2>Contacts!</h2>
            <div>
            <NavLink to="/" style={{ margin: '2em'}}>Home</NavLink>
            <NavLink to="/form" style={{ margin: '2em'}}>Submit Info</NavLink>


            </div>
            
        </div>
        );
    }
}

export default Header;