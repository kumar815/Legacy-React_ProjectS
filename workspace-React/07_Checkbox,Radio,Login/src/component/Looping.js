import React from "react";
//react Conditional Looping
//  
class Looping extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: ''

        };
    }

    login = () => {
        this.setState({
            isLoggedIn: 'true'

        })
    }
    logout = () => {
        this.setState({
            isLoggedIn: 'false'
        })
    }
    render() {
        return ( <
            React.Fragment >
            <
            div className = "p-2" >
            <
            div className = "container" >
            <
            div className = "row" >
            <
            div className = "col-md-4" >
            <
            div className = "card" >
            <
            div className = "card-header bg-secondary text-white" >
            <
            p className = "h4" > Auth Card < /p> < /
            div > <
            div className = "card-body rgba-success-light" > {
                this.state.isLoggedIn ?
                <
                button
                onClick = { this.logout }
                className = "btn btn-danger btn-sm" > LogOut < /button> : <
                button
                onClick = { this.login }
                className = "btn btn-success btn-sm" > Login < /button> 
            }



            {
                this.state.isLoggedIn ?
                    <
                    React.Fragment >
                    <
                    div >
                    <
                    p className = "h3" > Welcom - login < /p> <
                small > connect success "login" < /small> < /
                div >

                    <
                    /React.Fragment> : <
                React.Fragment >
                    <
                    div >
                    <
                    p className = "h3" > < /p> <
                small > Guest user login < /small> < /
                div >
                    <
                    /React.Fragment>
            }


            <
            /
            div > < /
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

export default Looping;