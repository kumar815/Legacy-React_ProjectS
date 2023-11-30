import React from 'react';
import ComponentB from './ComponentB';
//import ComponentC from './ComponentC';
class ComponentA extends React.Component {
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
            div className = "card-body rgba-amber-light" >
            <
            p className = "h4" > App ComponentA < /p>  <
            ComponentB /
            > < /
            div > < /
            div > <
            /div> < /
            div > <
            /div> < /
            section >

            <
            /React.Fragment>

        );
    }
}

export default ComponentA;