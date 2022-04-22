import React from "react";
import { Table } from "react-bootstrap";

const ListProduct = ({ products }) => {
  return (
    <div>
      {console.log("products:::>>", products)}
      {!products[0]?.length > 0 ? (
        <h3>Zero products</h3>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Product Code</th>
              <th>Product Name</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {products[0]?.map((product, index) => (
              <tr key={index}>
                <td>{product.productCode}</td>
                <td>{product.productName}</td>
                <td>{product.quantity}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default ListProduct;
