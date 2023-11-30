import React from "react";

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {
                sno: '110ab',
                image: "https://is4.fwrdassets.com/images/p/ip2/pl2/MNDF-ML6_V1.jpg",
                name: "watch",
                price: "4500",
                qty: 2,
            }

        }
    }

    incrQty = () => {
        this.setState({
            product: {
                ...this.product,
                qty: (this.state.product.qty + 1 > 0) ? this.state.product.qty + 1 : 1
            }
        })
    }

    decrQty = () => {
        this.setState({
            product: {
                ...this.product,
                qty: (this.state.product.qty - 1 > 0) ? this.state.product.qty - 1 : 1
            }
        })
    }
    render() {

        //let { product } = this.state;
        return ( <
            React.Fragment >
            <
            h1 className = "head " > Product - List < /h1>  <
            section className = "p-3" >
            <
            div class = "container" >
            <
            div class = "row" >
            <
            div class = "col-9" >
            <
            p class = "h3 text-primary" > Cart Items <
            /p>  <
            p className = "lead" > Radom Word Generator tool to generate random words from a list of commonly used words.Generate up to 50 random words at a time. < /p> < /
            div > <
            /div> < /
            div >
            <
            /section> 

            <
            section className = "container-1 " >
            <
            div className = "row row align-items-start" >
            <
            div className = "col" >
            <
            table className = "table table-hover text-center text-striped" >

            <
            thead className = "bg-danger " >
            <
            th >
            <
            tr > SNO: < /tr> <
            tr > IMAGE: < /tr> <
            tr > NAME: < /tr> <
            tr > PRICE: < /tr> <
            tr > QTY: < /tr> <
            tr > TOTAL: < /tr> < /
            th >
            <
            /thead> 

            <
            tbody className = "text-center text-white bg-primary" >
            <
            tr >
            <
            td > { this.state.product.sno } < /td>  <
            td >
            <
            image src = { this.state.product.image }
            width = "50"
            height = "50"
            alt = "image" / >
            <
            td > { this.state.product.name } < /td> <
            td > { this.state.product.price } < /td> <
            td >
            <
            i className = "fa fa-minus-circle ma-1"
            onClick = { this.decrQty }
            / > { this.state.product.qty } <
            i className = "fa fa-plus-circle ma-1"
            onClick = { this.incrQty }
            / > < /
            td > <
            td > { this.state.product.price * this.state.product.qty } < /td>

            <
            /td> < /
            tr >

            <
            /tbody>


            <
            /
            table > < /
            div > <
            /div> 



            <
            /
            section >





            <
            /
            React.Fragment >
        );
    }
}

export default ProductList;