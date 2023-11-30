import React, { Component } from "react";

class InterChild extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cText: ''
        };
    }

    updateInput = (e) => {
        const newText = e.target.value;
        this.setState({
            cText: newText
        });
        this.props.sendData(newText); // Send the updated text to the parent
    }

    render() {
        return ( <
            React.Fragment >
            <
            section className = "p-3" >
            <
            div className = "container1" >
            <
            div className = "row" >
            <
            div className = "col" >
            <
            div className = "card" >
            <
            div className = "card-header rgba-green-light" >
            <
            h2 className = "h" > InterChild < /h2> < /
            div > <
            div className = "card-body rgba-green-light" >
            <
            form className = "form-inline" >
            <
            div className = "form-group" >
            <
            input value = { this.state.cText }
            onChange = { this.updateInput }
            type = "text"
            className = "form-control"
            alt = ""
            placeholder = "Child text" /
            >
            <
            /div> { this.props.pText } < /
            form > <
            /div> < /
            div > <
            /div> < /
            div > <
            /div> < /
            section > <
            /React.Fragment>
        );
    }
}

export default InterChild;



/*import React from "react";


class InterChild extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cText: ''
        };

    }

    updateInput = (e) => {
        this.setState({
            cText: e.target.value
        })
        this.props.sendData(e.target.value)
    }


    render() {
        return ( <
            React.Fragment >
            <
            section className = "p-3" >
            <
            div className = "container1" >
            <
            div className = "row" >
            <
            div className = "col" >
            <
            div className = "card " >
            <
            div className = "card-header rgba-green-light" >
            <
            h2 className = "h" > InterChild < /h2>  < /
            div > <
            div className = "card-body rgba-green-light" >
            <
            form className = "form-inline" >
            <
            div className = "form-group" >
            <
            input value = { this.state.cText }
            onChange = { this.updateInput }
            type = "text"
            className = "form-control"
            alt = ""
            placeholder = "Child text" / >

            <
            /div>  < /
            form >

            <
            /div> < /
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

export default InterChild;
*/