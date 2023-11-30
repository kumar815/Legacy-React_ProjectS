import React from "react";
import Navbar from "./components/Navbar";
import CssCard from "./components/CssCard";
import Employee from "./components/Employee";

import "./App.css";
import React from "react";

//function App() {
//let App = (props.Employee) => {
const App = () => {
    return ( <
        React.Fragment >
        <
        Navbar / >
        <
        Employee name = "rajan"
        age = "25"
        desiganation = "software" / >
        <
        Employee name = "anand"
        age = "25"
        desiganation = "software" / >
        <
        React.Fragment Employee name = "saji"
        age = "25"
        desiganation = "software" / >
        <
        /React.Fragment>
    );
};

// <
// CssCard massage = "Anand Kumar" / >
// <
// CssCard massage = "Good Afternoon" / >
// <
// CssCard massage = "Good-Night" / >
export default App; //let CssCard = (props) => {
//console.log(props);
const CssCard = (props) => {
    return ( <
        React.Fragment >
        <
        div className = "card" >
        <
        div className = "card-body" >
        <
        h2 > { new Date().toLocaleTimeString() } < />h2>{" "} <
        div >
        <
        h4 > { props.massage } < />h4>{" "} <
        p >
        <
        br / > Wake up, sleepyhead!
        <
        br / >
        Rise and shine!
        <
        br / > Good day to you, Bernard!
        <
        br / >
        It’ s a positive delight to see you.It’ s your day, Teacher.Have a great day!
        <
        br / >
        Hello there!Lovely to see you again!
        <
        br / >
        Look alive!You’ ll miss the bus. < React.Fragment div / >
        <
        />React.Fragment>
    );
};

export default CssCard; < /></ > < /></ > < /></ > < />);
};