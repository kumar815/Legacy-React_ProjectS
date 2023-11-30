//dropdown menu
import React from "react";
class SelectBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCar: ''
        };
    }

    updateSelect = (event) => {
        this.setState({
            [event.target.name]: event.target.value
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
            div className = "card-header bg-secondary text-white" >
            <
            p className = "h4" > Select - Box < /p> < /
            div > <
            div className = "card-body" >
            <
            div className = "row" >
            <
            div className = "col" >
            <
            form >
            <
            div className = "form-group dropdoen-menu" > {
                /*<
                            select onChange = { e => this.setState({ selectedCar: e.target.value }) }
                            className = "form-control dropdowm-items" > */
            } <
            select name = "selectedCar"
            onChange = { this.updateSelect }

            className = "form-control dropdowm-items" >
            <
            option value = '' > select a car < /option> <
            option value = 'ducati' > ducati < /option> <
            option value = 'bmw' > bmw < /option> <
            option value = 'audi' > audi < /option> <
            option value = 'rolls royce' > rolls royace < /option> <
            option value = 'range rover' > range rover < /option> < /
            select >

            <
            /div>

            <
            /form> < /
            div > <
            div className = "col" >
            <
            p className = "h4" > { this.state.selectedCar } < /p> <
            form >
            <
            div className = "form-group" >

            <
            /div>

            <
            /form> < /
            div >
            <
            /div>             < /
            div >
            <
            /div> < /
            div > <
            /div> < /
            div > <
            /div> < /
            React.Fragment >
        );
    }
}

export default SelectBox;