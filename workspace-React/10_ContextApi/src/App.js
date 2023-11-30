import React from "react";
import './App.css';
import { UserContext } from "./components/context/UserContext";
import ComponentA from './components/ComponentA';
//import ComponentB from './components/ComponentB';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                channel: 'Web-tech',
                author: 'Anand'
            }
        };
    }

    render() {
        return ( <
            React.Fragment > <
            nav className = "navbar navbar-dark navbar-expand-sm" >
            <
            a href = "/"
            className = "navbar-brand" > React with Contect Api Component < /a> < /
            nav >
            <
            section className = "p-3" >
            <
            div className = "container mb-4" >
            <
            div className = "row" >
            <
            div className = "col" >
            <
            div className = "card rgba-green-light" >
            <
            div className = "card-body " >
            <
            p className = "h4" > App Component < /p>  <
            small > { JSON.stringify(this.state.user) } < /small>

            <
            UserContext.Provider value = { this.state.user } >
            <
            ComponentA / >

            <
            /UserContext.Provider> < /
            div > < /
            div > <
            /div> < /
            div > <
            /div> < /
            section >
            <
            /
            React.Fragment >
        );
    }
}

export default App;