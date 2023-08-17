import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from 'react-router-dom'
import { myContext } from "./Context";

function Header() {
  const nav =useNavigate ()
  const  {setSearch}=useContext(myContext)
  const {cart,isLoggedIn,}=useContext(myContext)
  const {logindUser} = useContext (myContext)

  return (
    <div className="navi">
      <header className="sticky-top"> <header /> </header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand onClick={()=>{nav("/")}}>Baby Care</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action1" onClick={()=>{nav("/apparels")}}>Apparels</Nav.Link>
              <Nav.Link href="#action1" onClick={()=>{nav("/products")}}>Products</Nav.Link>
              <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#cont">Contact Us</Nav.Link>
           
            </Nav>
            <Nav>
           
          {isLoggedIn===true?(<div className="d-inline-flex">
            <Nav.Link href="#action7">
            <i onClick={()=>{nav('/cart')}} class="fa-solid fa-cart-shopping"><sup>{cart.length>0?cart.length:null}</sup></i>
          </Nav.Link>&nbsp;
          <Nav.Link>
          <i class="fa-solid fa-user" onClick={()=>{nav("/user")}}></i><br/>
          {logindUser}

          </Nav.Link>  &nbsp;
          </div> ):
            <div className="d-inline-flex">
          <Nav.Link href="#action1" onClick={()=>{nav("/login")}}>LogIn</Nav.Link> &nbsp;
          <Nav.Link href="#action1" onClick={()=>{nav("/signup")}}>SignUp</Nav.Link>
          </div>
}
            </Nav>
            <Form className="d-flex">
              <Form.Control
             
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"

                onChange={(e)=>{setSearch(e.target.value)}}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>&nbsp;
         
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
