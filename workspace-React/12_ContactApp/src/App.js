import React from "react";
import './App.css';
import ContactApp from './components/ContactApp';

class App extends React.Component {
    render() {
        return ( <
            React.Fragment >
            <
            nav className = "navbar navbar-dark navbar-expand-sm" >
            <
            a href = "/"
            className = "navbar-brand" > React axios with contact app < /a> < /
            nav >

            <
            ContactApp / >
            <
            /React.Fragment>
        );
    }
}

export default App;