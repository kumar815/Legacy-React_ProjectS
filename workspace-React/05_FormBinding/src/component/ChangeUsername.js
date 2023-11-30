//input values given show in the footer handle to (event.terget)
import React from "react";
class ChangeUsername extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        };
    }

    updateInput = (event) => {
        this.setState(
            // console.log(event.target.value),
            {
                username: event.target.value
            }
        )

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
            p className = "h4" > Registar - Form <
            /p> < /
            div > <
            div className = "card-body" >
            <
            form >
            <
            div className = "form-group" >
            <
            input value = { this.state.username }
            onChange = { this.updateInput }
            type = "text"
            className = "form-control"
            placeholder = "User-Namee" / > <
            /div>

            <
            div className = "card-footer" >
            <
            p className = "text text-white" > { this.state.username } <
            /p> < /
            div >

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
export default ChangeUsername;