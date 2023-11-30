import React from "react";
import ChlidBasic from '../../components/Basic/ChlidBasic';

class ParentBasic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pText: 'Input given parent.dispaly text childBasic',
            cText: ''
        };
    }
    reciveData = (value) => {
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
            div className = "container" >
            <
            div className = "row" >
            <
            div div className = "col-md-8" >
            <
            div className = "card" >
            <
            div className = "card-body rgba-purple-light" >
            <
            p className = "h4" > parent < /p>    <
            small > { this.state.cText } < /small>

            <
            small > < /small> < /
            div >
            <
            ChlidBasic pText = { this.state.pText }
            sendData = { this.reciveData }
            / >

            <
            /
            div > < /
            div > < /
            div > < /
            div > <
            /section>  < /
            React.Fragment >

        );
    }
}

export default ParentBasic;