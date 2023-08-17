import React, { useContext } from 'react';
import { Container,  Form, Button } from 'react-bootstrap';
import { myContext } from './Context';
import { useNavigate } from 'react-router-dom';
import Adminheader from './Adminheader';

export default function App() {
    const navigate = useNavigate ()
    const {product,setProduct}= useContext(myContext)
    const handleSubmit =(e)=>{
     e.preventDefault();
     const newname= e.target.name.value;
     const newtype= e.target.type.value;
     const newsrc= e.target.src.value;
     const newdescription= e.target.description.value;
     const newprice = e.target.price.value;
     setProduct((d)=>d=[...product,{
         id: product.length+1,
        name:newname,
        type:newtype,
        src:newsrc,
        discription:newdescription,
        price:newprice,
        Qty:1}])

        console.log(product);

    }
  return (
    <>
    <Adminheader />
    <div className='addproduct'>
      
    <Container className='add'>
      <Form onSubmit={handleSubmit}>
      
        
            <Form.Group controlId='form6Example1' className='mb-4'>
              <Form.Label>NAME</Form.Label>
              <Form.Control type='text' id='name' placeholder='name' />
            </Form.Group>
          
         
       

        <Form.Group controlId='form6Example3' className='mb-4'>
          <Form.Label>TYPE</Form.Label>
          <Form.Control type='text' id='type' placeholder='category'/>
        </Form.Group>

        <Form.Group controlId='form6Example4' className='mb-4'>
          <Form.Label>SRC</Form.Label>
          <Form.Control type='text' id='src' placeholder='image' />
        </Form.Group>

        <Form.Group controlId='form6Example5' className='mb-4'>
          <Form.Label>DESCRIPTION</Form.Label>
          <Form.Control type='text' id='description' placeholder='discription' />
        </Form.Group>

        <Form.Group controlId='form6Example6' className='mb-4'>
          <Form.Label>PRICE</Form.Label>
          <Form.Control type='number' id='price'  placeholder='price'/>
        </Form.Group>



        <Button className='mb-4' type='submit' block>
          Add New Product
        </Button><br />
        <Button onClick={()=>{navigate("/Adminhome")}}>back to products</Button>
      </Form>
    </Container>
    </div>
    </>
  );
}
