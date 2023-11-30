import React from "react";
import './App.css';
//import ParentBasic from './components/Basic/ParentBasic';
//import InterParent from './components/InterParent';
//import AdvParent from './components/Basic/Clintcard';
import Clintcard from "./components/Basic/Clintcard";
import ProductDetails from './components/Basic/ProductDetails';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0
        };
    }

    receiveTotal = (value) => {
        this.setState({
            total: value
        })
    }
    render() {
        return ( <
            React.Fragment > {
                /*<h1>basic level parent-child how to work</h1>
                            <
                            ParentBasic / > */
            } <
            nav className = "navbar navbar-dark navbar-expand-sm" >
            <
            a href = "/"
            className = "navbar-brand" > React with Components Interaction parent to child < /a> < /
            nav > { /* <InterParent/>*/ } { /* advanced parent child project */ } <
            section className = "p-3" >
            <
            div className = "container" >
            <
            div className = "row" >
            <
            div className = "col-md-4" >
            <
            Clintcard sendTotal = { this.receiveTotal }
            / > < /
            div > <
            div className = "col-md-4" >
            <
            ProductDetails total = { this.state.total }
            / > < /
            div >


            <
            /div> < /
            div > <
            /section>  < /
            React.Fragment >
        );
    }
}

export default App;