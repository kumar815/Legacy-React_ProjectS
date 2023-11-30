import React from "react";
import "../node_modules/mdbootstrap/css/mdb.css";
import './App.css';
//import ChangeUsername from "./component/ChangeUsername";
//import Login from "./component/Login";
//import SelectBox from "./component/SelectBox";
import ChangePassword from "./component/ChangePassword";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // You can initialize your state here if needed.
        };
    }

    render() {
        return ( <
            React.Fragment >
            <
            ChangePassword / >


            {
                /* <
                            SelectBox / >*/
            }


            { /*<Login/>*/ }


            { /* <ChangeUsername/>*/ }

            <
            /React.Fragment>
        );
    }
}

export default App;