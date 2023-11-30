import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: {
                counter: 0,
                name: "Example button onclick Increment ",
                age: 23,
                desiganation: "softwere developer"
            }
        }
    }

    incrementCounter = () => {
        this.setState({
            count: {
                ...this.state.count,
                counter: this.state.count.counter + 1
            }

        })
    }

    render() {
        return ( <
            React.Fragment >
            <
            pre > { JSON.stringify(this.state) } < /pre> <
            h2 > { this.state.count.counter } < /h2>  <
            button onClick = { this.incrementCounter } > Increment <
            /button>   < /
            React.Fragment >

        );
    }
}

export default Counter;