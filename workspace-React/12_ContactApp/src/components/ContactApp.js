import React from 'react';
import ContactList from './ContactList';
import ContactCard from './ContactCard';

class ContactApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedUser: {}
        };
    }

    receiveUser = (user) => {
        this.setState({
            selectedUser: user
        });
    }

    render() {
        return ( <
            React.Fragment >
            <
            section className = 'p-3' >
            <
            div className = 'container' >
            <
            div className = 'row' >
            <
            div className = 'col-md-9' >
            <
            p className = 'h3 text-primary' > Contact App < /p> <
            p className = 'lead' > This fetches the data contact list to contact card < /p> < /
            div > <
            /div> < /
            div > <
            /section> <
            section >
            <
            div className = 'container' >
            <
            div className = 'row' >
            <
            div className = 'col-md-9' >
            <
            ContactList sendUser = { this.receiveUser }
            /> < /
            div > <
            div className = 'col-md-3' >
            <
            ContactCard selectedUser = { this.state.selectedUser }
            /> < /
            div > <
            /div> < /
            div > <
            /section> < /
            React.Fragment >
        );
    }
}

export default ContactApp;