//previous version use it code(old ver)
//import React,{Component} from 'react';

//new version
import React from "react";

class Employee extends React.Component {
  render() {
    return (
      <div>
        <h2> Employee Details... </h2>{" "}
        <div className="card">
          {" "}
          Name: <b> {this.props.Name} </b>{" "}
        </div>{" "}
      </div>
    );
  }
}
export default Employee;
