import React from "react";
class SMSApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            maxCount: '100',
            text: ''
        };
    }

    updateText = (event) => {
        this.setState({
            ...this.state,
            text: event.target.value
        })
    }
    render() {
        return ( <
            React.Fragment >
            <
            div className = "p-3" >
            <
            div className = "container" >
            <
            div className = "row" >
            <
            div className = "col-md-6" >
            <
            div className = "card" >
            <
            div className = "card-header bg-primary text-white" >
            <
            p className = "h1" > SMS Application < /p>

            <
            /div> <
            div className = "card-body" >
            <
            form >
            <
            div className = "form-group" >
            <
            textarea value = { this.state.text }
            onChange = { this.updateText }
            maxLength = { this.state.maxCount }
            rows = "25"
            cols = "50"
            className = "form-control"
            placeholder = "your text here" >

            <
            /textarea> < /
            div > <
            /form> <
            div className = "h4" >
            The Charters remaining: { this.state.maxCount - this.state.text.length } < /div> <
            div className = "btn btn-success" >
            submit < /div> < /
            div > < /
            div > <
            /div> < /
            div > <
            /div> < /
            div > <
            /React.Fragment>

        );
    }
}
export default SMSApp;