import React from 'react';
import ComponentC from '../components/ComponentC';
class ComponentB extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return ( <
            React.Fragment >


            <
            section className = "p-3" >
            <
            div className = "container" >
            <
            div className = "row" >
            <
            div className = "col" >
            <
            div className = "card" >
            <
            div className = "card-body rgba-purple-light" >
            <
            p className = "h4" > App ComponentB < /p>  <
            small > { JSON.stringify(this.props.user) } < /small> <
            ComponentC user = { this.props.user }
            /> <
            /
            div > < /
            div > <
            /div> < /
            div > <
            /div> < /
            section > < /
            React.Fragment >

        );
    }
}

export default ComponentB;