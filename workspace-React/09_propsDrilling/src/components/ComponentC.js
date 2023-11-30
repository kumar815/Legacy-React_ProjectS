import React from 'react';
class ComponentC extends React.Component {
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
            div className = "card-body rgba-red-light" >
            <
            p className = "h4" > App ComponentC < /p> <
            small > { JSON.stringify(this.props.user) } < /small>

            <
            /
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

export default ComponentC;