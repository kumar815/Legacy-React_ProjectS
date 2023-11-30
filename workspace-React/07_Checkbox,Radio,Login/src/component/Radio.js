//bbi
import React from "react";

class Radio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                eating: false,
                sleeping: false,
                running: false
            }
        };
    }

    updateRadio = (event) => {
        const { name } = event.target;

        // Create a copy of the user object with all values set to false
        const newUser = {...this.state.user };
        for (const key in newUser) {
            newUser[key] = false;
        }

        // Set the clicked radio button to true
        newUser[name] = true;

        this.setState({ user: newUser });
    }

    render() {
        return ( <
            React.Fragment >
            <
            pre > { JSON.stringify(this.state) } < /pre> <
            div className = "container text-center" >
            <
            div className = "row text-center" >
            <
            div className = "col-sm-6" >
            <
            div className = "card text-white" >
            <
            div className = "card-header" >
            <
            h3 className = "h3 text-success" > Hobby Selector < /h3> <
            /div> <
            div className = "card-body text-danger" >
            <
            form >
            <
            div className = "form-check" >
            <
            input name = "eating"
            onChange = { this.updateRadio }
            className = "form-check-input"
            type = "radio"
            id = "eatingRadio"
            checked = { this.state.user.eating }
            /> <
            label className = "form-check-label"
            htmlFor = "eatingRadio" >
            Eating <
            /label> {
                this.state.user.eating && ( <
                    div className = "eating bg-warning p-3 text-dark" >
                    <
                    p className = "h3" >
                    <
                    i className = "fa fa-check-circle" > < /i>
                    This is Eating time please follow the time <
                    /p> <
                    /div>
                )
            } <
            /div>

            <
            div className = "form-check" >
            <
            input name = "sleeping"
            onChange = { this.updateRadio }
            className = "form-check-input"
            type = "radio"
            id = "sleepingRadio"
            checked = { this.state.user.sleeping }
            /> <
            label className = "form-check-label"
            htmlFor = "sleepingRadio" >
            Sleeping <
            /label> {
                this.state.user.sleeping && ( <
                    div className = "eating bg-danger p-3 text-dark" >
                    <
                    p className = "h3" >
                    <
                    i className = "fa fa-check-circle" > < /i>
                    This is Sleeping time please follow the time <
                    /p> <
                    /div>
                )
            } <
            /div>

            <
            div className = "form-check" >
            <
            input name = "running"
            onChange = { this.updateRadio }
            className = "form-check-input"
            type = "radio"
            id = "runningRadio"
            checked = { this.state.user.running }
            /> <
            label className = "form-check-label"
            htmlFor = "runningRadio" >
            Running <
            /label> {
                this.state.user.running && ( <
                    div className = "eating bg-info p-3 text-dark" >
                    <
                    p className = "h3" >
                    <
                    i className = "fa fa-check-circle" > < /i>
                    This is Running time please follow the time <
                    /p> <
                    /div>
                )
            } <
            /div> <
            /form> <
            /div> <
            /div> <
            /div> <
            /div> <
            /div> <
            /React.Fragment>
        );
    }
}

export default Radio;