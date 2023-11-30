import React from "react";
class Registar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: '',
                email: '',
                password: '',
                desiganation: '',
                terms: 'false'

            }
        };
    }
    updateInput = (event) => {
        if (event.target.type === 'checkbox') {
            this.setState({
                ...this.state.user,
                [event.target.name]: event.target.checked
            })
        } else {
            this.setState({
                user: {
                    ...this.state.user,
                    [event.target.name]: event.target.value
                }
            })
        }
    }

    subimtRegistar = (event) => {
        event.preventDefault();
        console.log(this.state.user);

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
            div className = "col-md-4" >
            <
            div className = "card" >
            <
            div className = "card-header bg-danger text-white" >
            <
            p className = "h4" > Registar here < /p> < /
            div > <
            div className = "card-body rgba-red-light" >
            <
            form onSubmit = { this.subimtRegistar } >
            <
            div className = "form-group" >
            <
            input name = "username"
            value = { this.state.user.username }
            onChange = { this.updateInput }
            type = "text"
            className = "form-control"
            placeholder = "Enter Your Name" / >
            <
            /div> <
            div className = "form-group" >
            <
            input name = "email"
            value = { this.state.user.email }
            onChange = { this.updateInput }
            type = "email"
            className = "form-control"
            placeholder = "Enter Email Address" / >
            <
            /div> <
            div className = "form-group" >
            <
            input name = "password"
            value = { this.state.user.password }
            onChange = { this.updateInput }
            type = "password"
            className = "form-control"
            placeholder = "Enter Your password" / >
            <
            /div> <
            div className = "form-group" >
            <
            select name = "desiganation"
            value = { this.state.user.desiganation }
            onChange = { this.updateInput }
            className = "form-control" >
            <
            option className = "" > Select Desiganation < /option> <
            option className = "softwere Engg" > Softwere Engg < /option> <
            option className = "Manager" > Manager < /option> <
            option className = "HR" > HR < /option> <
            option className = "Accountent" > Accountent < /option> <
            option className = "Vendor" > Vendor < /option> <
            option className = "Director" > Director < /option> < /
            select >
            <
            div className = "form-group" >
            <
            div className = "form-check" >
            <
            input name = "terms"
            onChange = { this.updateInput }
            className = "form-check-input"
            type = "checkbox"
            value = ""
            id = "defaultCheck1" / >
            <
            label className = "form-check-label"
            htmlfor = "defualtCheck1" > Accpet terms and Conditions < /label> < /
            div > < br / > <
            input type = "submit"
            className = "btn btn-success "
            value = "Registar" /
            >
            <
            /div> <
            br / >
            <
            /
            div > < /
            form > <
            /div> < /
            div > <
            /div> < /
            div > <
            /div> < /
            div >

            <
            /React.Fragment>

        );
    }
}

export default Registar;