import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Form from './Form';
import Home from './Home';

import '../index.css';

class Switcheroo extends Component {
    render() {
        return (
        <div style={{display: 'flex', flexFlow: 'column nowrap', alignItems: 'center', textAlign: 'center'}}>
            
            <Route exact path="/" component={Home}/>
            <Route path="/form" component={Form} />

            
        </div>
        );
    }
}

export default Switcheroo;