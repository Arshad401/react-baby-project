


import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


import {  useNavigate } from 'react-router-dom';

function Adminheader() {

 
  const navigate = useNavigate ()
  
  

  return (
    <>
    <div className='admin-nav'>
    <Navbar expand="lg" className="bg-body-tertiary ">
      <Container fluid>
        <Navbar.Brand onClick={()=>{navigate('/Adminhome')}}>ADMINLOG</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" onClick={()=>{navigate("/Adminaddproduct")}}>Add Products</Nav.Link>
            <Nav.Link href="#action2" onClick={()=>{navigate("/Adminusersec")}}>Users</Nav.Link>
            <NavDropdown title="Catagories" id="navbarScrollingDropdown">
              <NavDropdown.Item onClick={()=>{navigate("/Adminproduct")}}>Accessories</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{navigate("/Adminapparels")}} >Apparels
                
              </NavDropdown.Item>
              <NavDropdown.Divider />
             
            </NavDropdown>
           
          </Nav>
          <Button  onClick={()=>{navigate('/')}}>Logout</Button>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
   
    
    </>
  );
}

export default Adminheader;