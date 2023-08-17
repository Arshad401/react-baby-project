import React,{useContext} from 'react'
import { myContext } from './Context'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from 'react-router-dom';
import Adminheader from './Adminheader';



const Adminapparels = () => {
  const navigate = useNavigate()
    const {product,setProduct} =useContext(myContext)
    const cloths= product.filter((data)=>data.type === "Cloths")
    const handleDelete = (id) =>{
     const afterremoved = product.filter((item)=>{return item.id !== parseInt(id)})
     
     if (afterremoved.length>0){
      setProduct(afterremoved)
     }
    }

  return (
    <>
    <Adminheader />
    
    <div className='Admincard-container'>
      
        
       {cloths.map((item) => (
        <Card style={{ width: "18rem" }} className='admincarrd' key={item.id}>
          <Card.Img variant="top" src={item.src} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
              {item.discription}
            </Card.Text>
            <Card.Text>
              {item.price}
            </Card.Text>
            <Button variant="primary"onClick={()=>{navigate(`/Admineditproduct/${item.id}`)}}>Edit</Button>&nbsp;
            <Button variant="primary"onClick={()=>handleDelete(item.id)}>Delete</Button>
          </Card.Body>
        </Card>
        ))}
    </div>
    </>
  )
}

export default Adminapparels
