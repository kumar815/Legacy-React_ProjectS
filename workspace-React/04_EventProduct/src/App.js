import React from "react";
import ProductList from '../src/component/productList';
import "../node_modules/mdbootstrap/css/mdb.css";
import './App.css';

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
            ProductList / >
            <
            /React.Fragment>
        );
    }
}

export default App;