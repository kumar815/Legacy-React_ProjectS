import React from "react";
import './App.css';
//import ComponentA from './components / ComponentA ';
import UserList from './components/UserList';
//import ComponentB from './components/ComponentB';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return ( <
            React.Fragment >
            <
            nav className = "navbar navbar-dark navbar-expand-sm" >
            <
            a href = "/"
            className = "navbar-brand" > React HTTp with axios < /a> < /
            nav > <
            UserList / >
            <
            /React.Fragment>



        );
    }
}

export default App;