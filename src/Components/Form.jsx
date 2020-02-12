import React from 'react';

import '../App.css';
import ContactList from './ContactList';

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        records: [],
        };
        //bind 
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateState = this.updateState.bind(this);
    }

    // event handler needed for the input fields
    updateState(event, key) {
        this.setState({
        [key]: event.target.value
        })
    }

    //form handler
    handleSubmit(e) {
        e.preventDefault();
        //create a new record
        const newRecord = {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip,
        }

        //add record to the state and clear the form
        this.setState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        records: [
            ...this.state.records, //pull in previous submissions
            newRecord  //add new record to array
        ]
        })

    }


    render() {
        return (
        <div className="App">
        <form onSubmit={this.handleSubmit}>
            <div className="form-field">
            <label htmlFor="name">
                Name
                <input type="text" id="name" name="name"
                value={this.state.name}
                onChange={event => {this.updateState(event, 'name')}}
                />
            </label>
            </div>
            <div className="form-field">        
            <label htmlFor="email">
                Email
                <input type="text" id="email" name="email" 
                value={this.state.email}
                onChange={event => {this.updateState(event, 'email')}}
                />
            </label> 
            </div>  
            <div className="form-field">        
            <label htmlFor="phone">
                Phone
                <input type="text" id="phone" name="phone"
                value={this.state.phone}
                onChange={event => {this.updateState(event, 'phone')}}
                />
            </label>  
            </div>  
            <div className="form-field">        
            <label htmlFor="address">
                Street Address
                <input type="text" id="address" name="address"
                value={this.state.address}
                onChange={event => {this.updateState(event, 'address')}}
                />
            </label> 
            </div> 
            <div className="form-field">                   
            <label htmlFor="city">
                City
                <input type="text" id="city" name="city"
                value={this.state.city}
                onChange={event => {this.updateState(event, 'city')}}
                />
            </label> 
            </div> 
            <div className="form-field">           
            <label htmlFor="state">
                State
                <input type="text" id="state" name="state"
                value={this.state.state}
                onChange={event => {this.updateState(event, 'state')}}
                />
            </label>
            </div>  
            <div className="form-field">         
            <label htmlFor="zip">
                Zip
                <input type="text" id="zip" name="zip"
                value={this.state.zip}
                onChange={event => {this.updateState(event, 'zip')}}
                />
            </label>
            </div> 
            <input type="submit" value="Add Contact" />  
        </form>
        <ContactList records={this.state.records} />
        </div>
        )
    }
}

export default Form;