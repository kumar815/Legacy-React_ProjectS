import React from 'react';
class Clintcard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            price: '',
            gst: ''

        };
    }

    updateInput = (e) => {
        if (e.target.name === 'price' && Number < 0) {
            // Don't allow negative prices
            return;
        }

        if (e.target.name === 'gst' && Number < 0) {
            // Don't allow negative GST values
            return;
        }

        this.setState({
            ...this.state,
            [e.target.name]: Number(e.target.value)
        })
    }
    submitCalc = (e) => {
        e.preventDefault();
        let tax = Number(this.state.price) * this.state.gst / 100;
        let total = Number(this.state.price) + tax;
        this.props.sendTotal(total);

    }

    render() {
        return ( <
            React.Fragment >
            <
            div className = 'card mx-2 ' >
            <
            div className = 'card-header bg-warning text white' >
            <
            p className = 'h4' > Client - Card < /p> < /
            div >

            <
            div className = 'card-body' >
            <
            form onSubmit = { this.submitCalc } >
            <
            div className = 'form-group' >
            <
            input name = 'price'
            value = { this.state.price }
            onChange = { this.updateInput }
            type = 'number'
            className = 'form-control'
            placeholder = 'product price' / >
            <
            /div>

            <
            div className = 'form-group' >
            <
            input name = 'gst'
            value = { this.state.gst }
            onChange = { this.updateInput }
            type = 'number'
            className = 'form-control'
            placeholder = 'Gst' / >
            <
            /div> <
            div >
            <
            input type = 'submit'
            className = 'btn btn-secondary btn-sm'
            value = "calculate Total" / >
            <
            /div> < /
            form > < /
            div > <
            /div>

            <
            /React.Fragment>

        );
    }
}

export default Clintcard;