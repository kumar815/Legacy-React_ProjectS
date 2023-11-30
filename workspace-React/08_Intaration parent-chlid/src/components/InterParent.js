import React from "react";
import InterChild from './InterChlid';

class InterParent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pText: '',
            cText: ''
        };
    }

    receiveData = (value) => {
        this.setState({
            cText: value
        });
    }

    handleParentTextChange = (e) => {
        const newText = e.target.value;
        this.setState({
            pText: newText
        });
        this.receiveData(newText); // Update child's text with the parent's text
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
            div className = "card-header rgba-amber-light" >
            <
            h2 className = "h" > InterParent < /h2> <
            small > { this.state.cText } < /small> < /
            div > <
            div className = "card-body rgba-amber-light" >
            <
            form className = "form-inline" >
            <
            div className = "form-group" >
            <
            input value = { this.state.pText }
            onChange = { this.handleParentTextChange }
            type = "text"
            className = "form-control"
            alt = ""
            placeholder = "Parent text" /
            >
            <
            /div> < /
            form > <
            /div> < /
            div > <
            InterChild pText = { this.state.pText }
            sendData = { this.receiveData }
            /> < /
            div > <
            /div> < /
            div > <
            /section> < /
            React.Fragment >
        );
    }
}

export default InterParent;





/*
import React from "react";
import InterChild from './InterChlid';

class InterParent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pText: '',
            cText: ''
        };
    }

    receiveData = (value) => {
        this.setState({
            ...this.state,
            cText: value
        })

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
            div className = "card-header rgba-amber-light " >
            <
            h2 className = "h" > InterParent < /h2> <
            small > { this.state.cText } < /small> 

            <
            /
            div > <
            div className = "card-body rgba-amber-light" >
            <
            form className = "form-inline" >
            <
            div className = "form-group" >
            <
            input value = { this.state.pText }
            onChange = { this.state.cText }
            type = "text"
            className = "form-control"
            alt = ""
            placeholder = "Parent text" / >

            <
            /div>  < /
            form >
            <
            /
            div > < /
            div >

            <
            InterChild pText = { this.state.pText }
            sendData = { this.receiveData }
            / > < /
            div > < /
            div > <
            /div> < /
            section >


            <
            /
            React.Fragment >

        );
    }
}

export default InterParent;
*/