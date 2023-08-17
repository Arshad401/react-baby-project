import React, { useState } from 'react';
import {
  Container,
  Card,
  Row,
  Col,
  Form,
  Button,
  Image,
  
  FormCheck
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function App() {
    const nav = useNavigate()
    const [email,setEmail]= useState("") 
    const [password,setPassword] = useState("")
    const handleClick = (e)=>{
      e.preventDefault();
      if (email==='arshadxx91@gmail.com' && password === "12345") {
        nav("/Adminhome")
      }else{
        alert("invalid Credentials")
      }
    }
  return (
    <Container className='my-5'>
      <Card>

        <Row className='g-0 d-flex align-items-center'>

          <Col md='4'>
            <Image src='https://images.pexels.com/photos/3845213/pexels-photo-3845213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='phone' className='rounded-t-5 rounded-tr-lg-0' fluid />
          </Col>

          <Col md='8'>

            <Card.Body>

              <Form.Group className='mb-4'>
                <Form.Label>Email address</Form.Label>
                <Form.Control type='email' id='form1' onChange={(e)=>{setEmail(e.target.value)}}required />
              </Form.Group>

              <Form.Group className='mb-4'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' id='form2' onChange={(e)=>{setPassword(e.target.value)}}required />
              </Form.Group>

              <div className="d-flex justify-content-between mx-4 mb-4">
                <FormCheck label='Remember me' />
                <a href="!#">Forgot password?</a>
              </div>

              <Button className="mb-4 w-100" onClick={handleClick}>Sign in</Button>

            </Card.Body>

          </Col>

        </Row>

      </Card>
    </Container>
  );
}

export default App;
