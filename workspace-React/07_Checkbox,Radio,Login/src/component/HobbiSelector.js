import React from "react";
class HobbiSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                eating: 'false',
                sleeping: 'false',
                running: 'false'

            }
        };
    }

    updateCheck = (event) => {
        this.setState({
            user: {
                ...this.state.user,
                [event.target.name]: event.target.checked
            }
        })
    }
    render() {
        return ( <
            React.Fragment >
            <
            pre > { JSON.stringify(this.state) } < /pre> <
            div className = "containe text-center" >
            <
            div className = "row text-center" >
            <
            div className = "col-sm-6 " >
            <
            div className = "card text-white" >
            <
            div className = "card-header" >
            <
            h3 className = "h3 text-success" > HobbiSelector < /h3> < /
            div > <
            div className = "card-body text-danger " >
            <
            form >
            <
            div class = "form-check" >
            <
            input name = "eating"

            onChange = { this.updateCheck }
            class = "form-check-input"
            type = "checkbox"
            id = "flexCheckDefault" / >
            <
            label class = "form-check-label"
            for = "flexCheckDefault" >
            Eating <
            /label> < /
            div >

            <
            div class = "form-check" >
            <
            input name = "sleeping"
            onChange = { this.updateCheck }
            class = "form-check-input"
            type = "checkbox"
            id = "flexCheckDefault" / >
            <
            label class = "form-check-label"
            for = "flexCheckDefault" >
            Sleeping <
            /label> < /
            div >

            <
            div class = "form-check" >
            <
            input name = "running"
            onChange = { this.updateCheck }
            class = "form-check-input"
            type = "checkbox"
            id = "flexCheckDefault" / >
            <
            label class = "form-check-label"
            for = "flexCheckDefault" >
            Running <
            /label> < /
            div >

            {
                this.state.user.eating &&
                <
                div className = "eating bg-warning p-3 text-dark" >
                <
                p className = "h3" > < i className = "fa fa-check-circle" > < /i>
                this is Eating time please follow the time < /p > < /
                div >

            } {
                this.state.user.sleeping &&
                    <
                    div className = "eating bg-danger p-3 text-dark" >
                    <
                    p className = "h3" > < i className = "fa fa-check-circle" > < /i>
                this is Sleeping time please follow the time < /p > < /
                div >

            } {
                this.state.user.running &&
                    <
                    div className = "eating bg-info p-3 text-dark" >
                    <
                    p className = "h3" > < i className = "fa fa-check-circle" > < /i>
                this is Running time please follow the time < /p > < /
                div >

            } <
            /form> < /
            div > < /
            div > <
            /div> < /
            div > <
            /div>


            <
            /React.Fragment>

        );
    }
}

export default HobbiSelector;