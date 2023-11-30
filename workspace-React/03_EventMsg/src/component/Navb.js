import React from "react";
import './Navb';
class Navb extends React.Component {

    render() {
        return ( <
            React.Fragment >
            <
            div className = 'navbar' >
            <
            nav className = 'navbar navbar-dark bg-dark navbar-expend-sm text-danger' >
            <
            a href = '/'
            className = 'navbar-brand' > React Navbar < /a> < /
            nav > < /
            div > < /
            React.Fragment >
        )
    };

}
export default Navb;