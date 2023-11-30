import React from "react";
import './App.css';
import GithubProfileSearch from './Components/GithubProfileSearch';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return ( <
            React.Fragment >
            <
            nav className = "navbar navbar-dark navbar-expand-sm" >
            <
            a href = "/"
            className = "navbar-brand" > React Github Searching app < /a> < /
            nav >
            <
            GithubProfileSearch / >

            <
            /React.Fragment>
        );
    }
}

export default App;