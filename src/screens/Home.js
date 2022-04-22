import React, { useState } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import AddProduct from "../components/AddProduct";
import ListProduct from "../components/ListProduct";
import RemoveProduct from "../components/RemoveProduct";

const Home = () => {
  const [key, setKey] = useState("home");
  const [products, setProducts] = useState([]);
  return (
    <Container>
      <Tabs
        id='controlled-tab-example'
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className='mb-3 mt-5'
      >
        <Tab eventKey='home' title='Add Products'>
          Add Product{" "}
          <AddProduct setProducts={setProducts} products={products} />
        </Tab>
        <Tab eventKey='profile' title='Remove Products'>
          Remove Products
          <RemoveProduct setProducts={setProducts} products={products}/>
        </Tab>
        <Tab eventKey='contact' title='List Products'>
          List Products <ListProduct products={products} />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Home;
