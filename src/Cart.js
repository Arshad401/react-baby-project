import React, { useContext } from "react";
import Button from 'react-bootstrap/Button';
import Header from "./Header";
import {
  Card,
  Col,
  Container,
  Row,
  Image

} from "react-bootstrap";
import {
  FaArrowLeft,
  FaAngleDown,
} from "react-icons/fa";
import { myContext } from "./Context";


export default function Cart() {
    const{cart,setCart}=useContext(myContext)
    const handleDecrement = (id) =>{
      const updatedCart =cart.map((item) =>{
        if(item.id === id && item.Qty >1) {
          return {...item, Qty: item.Qty - 1};
        }
        return item;
      });
      setCart (updatedCart);
    };

    const handleIncrement = (id) =>{
      const updatedCart =cart.map((item) =>{
        if(item.id === id) {
          return {...item, Qty: item.Qty + 1};
        }
        return item;
      });
      setCart (updatedCart);
    };

    const deletei=(id)=>{

     setCart((i)=>i.filter((item)=>item.id!==id))
    }
    
  return (
    <div>
  <div className="sticky-top">
      <Header /></div>
   
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        
      <Container className="py-5 h-100">
     
        <Row className="justify-content-center align-items-center h-100">
          <Col>
            <Card>
              <Card.Body className="p-4">
                <Row>
                  <Col lg="7">
                    <Card.Title>
                      <a href="#!" className="text-body">
                        <FaArrowLeft className="me-2" /> Continue shopping
                      </a>
                    </Card.Title>
                    <hr />
                    { cart.map((item)=>(

                    <div className="d-flex justify-content-between align-items-center mb-4" key ={item.id}>
                      <div>
                        <p className="mb-1">Shopping cart</p>
                       <Image
                       src={item.src}
                       fluid
                       rounded
                       alt="pro" />
                      </div>
                      <div>
                        <p>
                          <span className="text-muted">{item.name}</span><br />
                          <a href="#!" className="text-body">
                            {item.price} <FaAngleDown className="mt-1" />
                          </a>
                        </p>
                      </div>
                      <button className="countbtn"onClick={()=>{handleDecrement(item.id)}}>-
                       </button>
                       <span className="count">{item.Qty}</span>

                       <button className="countbtn"onClick={()=>{handleIncrement(item.id)}}>+
                       </button>
                       <h3>price:{item.Qty*item.price}</h3><br/>
<div>
                       <Button variant="primary">Buy Now</Button>
                       <Button variant="danger" onClick={()=>{deletei(item.id)}}>Delete</Button>{' '}
                       </div>
                    </div>
                    ))} 



                  </Col>
                  <Col lg="5">
                    {/* <Card bg="primary" text="white" className="rounded-3">
                      <Card.Body> */}
                        {/* <div className="d-flex justify-content-between align-items-center mb-4">
                          <Card.Title className="mb-0"></Card.Title>
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                            className="rounded-3"
                            style={{ width: "45px" }}
                            alt="Avatar"
                          />
                        </div> */}

                        {/* <p className="small">Card type</p>
                        <div className="d-flex mb-4">
                          <a href="#!" type="submit" className="text-white me-2">
                            <FaCcMastercard className="fa-2x" />
                          </a>
                          <a href="#!" type="submit" className="text-white me-2">
                            <FaCcVisa className="fa-2x" />
                          </a>
                          <a href="#!" type="submit" className="text-white me-2">
                            <FaCcAmex className="fa-2x" />
                          </a>
                          <a href="#!" type="submit" className="text-white me-2">
                            <FaCcPaypal className="fa-2x" />
                          </a>
                        </div> */}

                        {/* <Form className="mt-4">
                          <Form.Group className="mb-4">
                            <Form.Label>Cardholder's Name</Form.Label>
                            <Form.Control
                              type="text"
                              size="lg"
                              placeholder="Cardholder's Name"
                            />
                          </Form.Group>
                        </Form> */}

                        <hr />

                        {/* <div className="d-flex justify-content-between">
                          <p className="mb-2">Subtotal</p>
                          <p className="mb-2">$4798.00</p>
                        </div> */}

                        {/* ... Other pricing details ... */}

                        {/* <Button variant="info" block size="lg">
                          <div className="d-flex justify-content-between">
                            <span>$000</span>
                            <span>
                              Checkout{" "}
                              <FaLongArrowAltRight className="ms-2" />
                            </span>
                          </div>
                        </Button> */}
                      {/* </Card.Body>
                    </Card> */}
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
    </div>
  );
}





























