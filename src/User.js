import React, { useContext } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaSkype } from 'react-icons/fa';
import { myContext } from './Context';
import { useNavigate } from 'react-router-dom';



export default function User() {
    const {userData,setIsLoggedIn,isLoggedIn}=useContext(myContext)
    const navigate=useNavigate()
  return (
    <div style={{ backgroundColor: '#eee' }}>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md="6" lg="4">
            <Card className="shadow-lg rounded">
              <Card.Body className="text-center">
                <div className="mt-3 mb-4">
                  <Card.Img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdV3ip1gxZ9bM13uZjWbiCpiETs2AVz3GS_Q&usqp=CAU"
                    className="rounded-circle"
                    fluid
                    style={{ width: '100px' }}
                  />
                </div>
                <h3>    {userData[userData.length-1].name}</h3>
                <h6> {userData[userData.length-1].email}</h6>

                <p className="text-muted mb-4">
                Customer <span className="mx-2">|</span> <a href="#!">premium member</a>
                </p>
                <div className="mb-4 pb-2">
                  <Button variant="outline-primary" className="mx-1">
                    <FaFacebook className="small-icon" />
                  </Button>
                  <Button variant="outline-primary" className="mx-1">
                    <FaTwitter className="small-icon" />
                  </Button>
                  <Button variant="outline-primary" className="mx-1">
                    <FaSkype className="small-icon" />
                  </Button>
                </div>
                <Button variant="primary" size="lg" className="rounded-pill" onClick={()=>{navigate("/"); setIsLoggedIn(!isLoggedIn)}}>
                  Logout
                </Button>
                <div className="d-flex justify-content-between text-center mt-5 mb-2">
                  <div>
                    <p className="mb-1 h5">RS.8471</p>
                    <p className="small text-muted mb-0">Wallets Balance</p>
                  </div>
                  <div className="px-3">
                    <p className="mb-1 h5">PREMIUM</p>
                    <p className="small text-muted mb-0">membership</p>
                  </div>
                  <div>
                    <p className="mb-1 h5">4751</p>
                    <p className="small text-muted mb-0">Total Transactions</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}


