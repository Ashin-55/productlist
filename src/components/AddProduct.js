import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const AddProduct = ({ setProducts, products }) => {
  const [value, setValue] = useState();
  const [countSelected, setCountSelected] = useState(false);
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), productCode: "", productName: "", quantity: "" },
  ]);

  //count of input fields
  const handleAddFields = (limit) => {
    let temp = [];
    for (let i = 0; i < limit - 1; i++) {
      console.log("1", i);
      temp.push({
        id: uuidv4(),
        productCode: "",
        productName: "",
        quantity: "",
      });
    }
    temp.map((i) => inputFields.push(i));

    console.log("temp:", temp);
    console.log("inputFields:", inputFields);
  };

  const handleCountChange = (e) => {
    setValue(e.target.value);
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
  //submit of product count
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("the count is :", value);
    setCountSelected(true);
    handleAddFields(value);
  };

  //submit function of addproduct details
  const handleSubmitAddProduct = (e) => {
    console.log("haii");
    e.preventDefault();
    setProducts((products) => [...products, inputFields]);
    setCountSelected(false);
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
          <Form.Label>
            Number of Products
            <Form.Control
              type='text'
              name='count'
              onChange={(e) => {
                handleCountChange(e);
              }}
            />
          </Form.Label>
          <input type='submit' value='Submit' />
        </Form>
      ) : (
        <form onSubmit={handleSubmitAddProduct}>
          {console.log("inputFields2:", products)}
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
                type='text'
                name={"productName"}
                placeholder='Product Name'
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
        </form>
      )}
    </div>
  );
};

export default AddProduct;
