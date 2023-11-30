import React from "react";
import { LandingPage } from "react";

class Navbar extends Component {
    constructor(props) {
        super(props) {

            render() {
                return ( <
                    React.Fragment >
                    <
                    div className = "container" >
                    <
                    a href = "/"
                    className = "navbar-brand" > Ultimate Tours < /a>  <
                    div className = "collapse navbar-collapse" >
                    <
                    ul className = "navbar-nav" >
                    <
                    li className = "nav-item" >
                    <
                    a href = "/"
                    className = "navbar-link" > Homes < /a>  < /
                    li >
                    <
                    li className = "nav-item" >
                    <
                    a href = "/"
                    className = "navbar-link" > Tours < /a>  < /
                    li >
                    <
                    li className = "nav-item" >
                    <
                    a href = "/"
                    className = "navbar-link" > Packages < /a>  < /
                    li >
                    <
                    li className = "nav-item" >
                    <
                    a href = "/"
                    className = "navbar-link" > Contact < /a>  < /
                    li >
                    <
                    /ul> < /
                    div >
                    <
                    /div > < /
                    div > < /
                    React.Fragment >
                );
            }
        }
    }
    export default Navbar;