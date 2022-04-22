import React, { useState } from "react";
import { Form, FormLabel } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const RemoveProduct = ({ setProducts, products }) => {
  const [count, setCount] = useState();
  const [countSelected, setCountSelected] = useState(false);
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), productCode: "", quantity: "" },
  ]);

  //count inputchange
  const handleCountChange = (e) => {
    setCount(e.target.value);
  };
  //submit of product count
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("the count is :", count);
    setCountSelected(true);
    handleAddFields(count);
  };
  //input change function
  const handleInputChange = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputFields(newInputFields);
  };
  //count of input fields
  const handleAddFields = (limit) => {
    let temp = [];
    for (let i = 0; i < limit - 1; i++) {
      console.log("1", i);
      temp.push({
        id: uuidv4(),
        productCode: "",
        quantity: "",
      });
    }
    temp.map((i) => inputFields.push(i));
    console.log("temp:", temp);
    console.log("inputFields:", inputFields);
  };
  //submit function remove product
  const handleSubmitRemoveProduct = (e) => {
    e.preventDefault();
    // setCountSelected(false);
    const productCode = [];
    for (let i = 0; i < inputFields.length; i++) {
      productCode.push = inputFields.productCode;
    }
    const filterOutput = products?.filter((product) =>
      productCode.includes(product.productCode)
    );
    console.log("the removable product details:", inputFields);
    console.log("the removable product flterData:", filterOutput);
    setInputFields([
      { id: uuidv4(), productCode: "", productName: "", quantity: "" },
    ]);
  };

  return (
    <div>
      {!countSelected ? (
        <Form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            type='number'
            placeholder='Enter the count'
            onChange={(e) => {
              handleCountChange(e);
            }}
          />
          <input type='submit' value='Submit' />
        </Form>
      ) : (
        <Form onSubmit={handleSubmitRemoveProduct}>
          {inputFields.map((inputField, index) => (
            <div key={index}>
              <input
                type='text'
                name={"productCode"}
                placeholder='Product Code'
                onChange={(event) => {
                  handleInputChange(inputField.id, event);
                }}
              />{" "}
              <input
                type='number'
                name={"quantity"}
                placeholder='Quantity'
                onChange={(event) => {
                  handleInputChange(inputField.id, event);
                }}
              />
            </div>
          ))}
          <input type='submit' value='Submit' />
        </Form>
      )}
    </div>
  );
};

export default RemoveProduct;
