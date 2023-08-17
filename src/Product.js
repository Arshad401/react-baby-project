import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { myContext } from './Context';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function Product() {
  const {product,search} = useContext(myContext)
  const navigate=useNavigate()
  return (
    
    <div>
      <div>   <Header/></div>
    
      
      <h1 id='card'>OUR LATEST CATEGORIES </h1>
      
    {product.filter((item)=>{
      return search.toLowerCase() === " "?item:item.name.toLowerCase().includes(search)
    }).map((item)=>(
      <div className=' d-inline-flex shadow-lg p-4 mb-5 bg-body-tertiary rounded ' >
       <Card style={{ width: '18rem' }}  id=" card">
      <Card.Img variant="top" src={item.src} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
        {item.price}
        </Card.Text>
        <Button variant="primary" onClick={()=>{navigate(`/viewmore/ ${item.id}`)}} >View More</Button>
      </Card.Body>
    </Card>
    </div>
 
    ))}
    </div>
    
  )
}

export default Product
