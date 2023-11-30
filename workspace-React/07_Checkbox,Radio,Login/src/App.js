import React from "react";
//import "../node_modules/mdbootstrap/css/mdb.css";
import './App.css';
//import Registar from './component/Registar';
//import SMSApp from './component/SMSApp';
//import Looping from './component/Looping';
//import HobbiSelector from './component/HobbiSelector';
//import Radio from './component/Radio';
import EmployeeForm from "./component/EmployeeForm";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return ( <
            React.Fragment >
            <
            EmployeeForm / >


            {
                /* <
                            Radio / >*/
            } {
                /*<
                        HobbiSelector / >*/
            } {
                /* <Looping / >*/
            }

            {
                /* <Registar / >*/
            }


            { /* < SMSApp / >*/ }

            <
            /React.Fragment>

        );
    }
}

export default App;