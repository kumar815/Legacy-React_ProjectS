import React, { useState } from "react";

//useState(0)meeans initail value (value return array) 2 contains
//[counter setCounter] meeans represent the value , update the value
const CounterFun = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <React.Fragment>
      <h2>{counter}</h2>
      <button onClick={incrementCounter}>Increment</button>
    </React.Fragment>
  );
};

export default CounterFun;

/*
//class based progrme
class counterFUn extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 


         };
    }
    render() {
        return (
            <React.Fragment>
                <h2>counterFUn</h2>
            </React.Fragment>
        );
    }
}
export default counterFUn;
*/