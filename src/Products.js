import React, { useContext } from "react";
import { myContext } from "./Context";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Header from './Header';

function Products() {
  const things = useContext(myContext);
  const nav = useNavigate ()
  const { product } = things;
  const store = product.filter((item) => item.type === "product");
  return (
    <div>
      <div>   <Header/></div>
      <h1>OUR BABY PRODUCTS</h1>
      {store.map((item) => (
        <Card style={{ width: "18rem" }} className="d-inline-flex shadow-lg p-4 mb-5 bg-body-tertiary rounded">
          <Card.Img variant="top" src={item.src} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.price}</Card.Text>
            <Button variant="primary"onClick={()=>{nav(`/viewmore/ ${item.id}`)}}>View More</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Products;
