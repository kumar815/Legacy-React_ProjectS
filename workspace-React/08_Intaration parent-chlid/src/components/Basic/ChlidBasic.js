import React from "react";

class ChlidBasic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cText: 'input given child in the button,click btn alret then ok enter parent class transfar input data'
        };
    }

    clickSend = () => {

        this.props.sendData(this.state.cText)
        alert('button is clicked')

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
            div div className = "col" >
            <
            div className = "card" >
            <
            div className = "card-body rgba-green-light " >
            <
            p className = "h4" > ChlidBasic < /p>  <
            small > { this.props.pText } <
            /small>  <br / > < hr / >
            <
            br / >

            <
            button onClick = { this.clickSend }
            className = "btn btn-blue-grey" > Enter < /button> < /
            div >

            <
            /div> < /
            div > < /
            div > < /
            div > <
            /section> < /
            React.Fragment >

        );
    }
}

export default ChlidBasic;