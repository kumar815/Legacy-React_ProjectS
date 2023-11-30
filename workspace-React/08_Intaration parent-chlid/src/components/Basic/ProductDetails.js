import React from 'react';

class ProductDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return ( <
            React.Fragment >
            <
            div className = 'card' >
            <
            div className = 'card-header bg-info text-white' >
            <
            p className = 'h4' > TotalAmount - Details < /p> < /
            div >
            <
            div className = 'card-body' >
            <
            p className = 'h3' > ₹{ this.props.total.toFixed(2) } < /p> < /

            div > < /

            div > <

            /React.Fragment>

        );

    }

}



export default ProductDetails;