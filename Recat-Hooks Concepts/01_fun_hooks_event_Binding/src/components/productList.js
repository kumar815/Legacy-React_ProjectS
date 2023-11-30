import React, { useState } from "react";

let ProductList = () => {
  let [product, setProduct] = useState({
    sno: '110ab',
    image: "https://is4.fwrdassets.com/images/p/ip2/pl2/MNDF-ML6_V1.jpg",
    name: "watch",
    price: 4500,
    qty: 2,
  });

  let incrQty = () => {
    setProduct({
      ...product,
      qty: product.qty + 1 > 0 ? product.qty + 1 : 1,
    });
  };

  let decrQty = () => {
    setProduct({
      ...product,
      qty: product.qty - 1 > 0 ? product.qty - 1 : 1,
    });
  };

  return (
    <React.Fragment>
      <h1 className="head">Product - List</h1>
      <section className="p-3">
        <div className="container">
          <div className="row">
            <div className="col-9">
              <p className="h3 text-primary">Cart Items</p>
              <p className="lead">
                Radom Word Generator tool to generate random words from a list
                of commonly used words.Generate up to 50 random words at a
                time.
              </p>
            </div>
          </div>
        </div>
      </section>
        <pre>{JSON.stringify(this.state)}</pre>
      <section className="container-1">
        <div className="row row align-items-start">
          <div className="col">
            <table className="table table-hover text-center text-striped">
              <thead className="bg-danger">
                <tr>
                  <th>SNO:</th>
                  <th>IMAGE:</th>
                  <th>NAME:</th>
                  <th>PRICE:</th>
                  <th>QTY:</th>
                  <th>TOTAL:</th>
                </tr>
              </thead>

              <tbody className="text-center text-white bg-primary">
                <tr>
                  <td>{product.sno}</td>
                  <td>
                  <img
                    src={product.image}
                    width="50"
                    height="50"
                    alt={`Product: ${product.name}`}
                    />
                  </td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>
                    <i
                      className="fa fa-minus-circle ma-1"
                      onClick={decrQty}
                    />
                    {product.qty}
                    <i
                      className="fa fa-plus-circle ma-1"
                      onClick={incrQty}
                    />
                  </td>
                  <td>{product.price * product.qty}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ProductList;
