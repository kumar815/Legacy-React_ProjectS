//input values given password must be same program
import React from "react";
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                username: '',
                email: '',
                password: ''
            }
        }
    }

    updateInput = (event) => {
        this.setState({
                user: {
                    ...this.state.user,
                    [event.target.name]: event.target.value
                }
            }
            // console.log(event.target.value),
        )
    }


    submitLogin = (event) => {
        //this is refresh the page stoped
        // event.preventDefault();
        console.log(this.state.user)

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
            div className = "col-md-4" >
            <
            div className = "card" >
            <
            div className = "card-header bg-secoundary text-white" >
            <
            p className = "h4" > Registar <
            /p> < /
            div > <
            div className = "card-body" >

            <
            form onSubmit = { this.submitLogin } >
            <
            div className = "form-group" >
            <
            input name = "username"
            value = { this.state.username }
            onChange = { this.updateInput }
            type = "text"
            className = "form-control"
            placeholder = "User-Name" / > <
            /div>


            <
            div className = "form-group" >
            <
            input name = "email"
            value = { this.state.user.email }
            onChange = { this.updateInput }
            type = "text"
            className = "form-control"
            placeholder = "email-Address" / > <
            /div>


            <
            div className = "form-group" >
            <
            input name = "password"
            value = { this.state.user.password }
            onChange = { this.updateInput }
            type = "password"
            className = "form-control"
            width = "35px"
            placeholder = "password" / > <
            /div>

            <
            input type = "submit"
            value = "Registar"
            className = "btn btn secondary text-white" / >


            <
            /
            form > <
            /div> < /
            div > <
            /div> < /
            div > <
            /div>  < /
            section >
            <
            /React.Fragment>

        );
    }
}
export default Login;