import React,{useContext} from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { myContext } from "./Context";
import { useNavigate } from "react-router-dom";
import Adminheader from "./Adminheader";


function Adminproduct() {
  const navigate = useNavigate()
  const { product, setProduct } = useContext(myContext);
  const prd = product.filter((data) => data.type === "product");
  const handleDelete = (id) =>{
    const afterremoved = product.filter((item)=>{return item.id !== parseInt(id)})
    console.log(afterremoved);
    if (afterremoved.length>0){
     setProduct(afterremoved)
    }
   }
  return (
    <>
    <Adminheader />
    <div className="Admincard-container">
       
      {prd.map((item) => (
        <Card style={{ width: "18rem" }}className="admincarrd" key={item.id}>
          <Card.Img variant="top" src={item.src} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
              {item.discription}
            </Card.Text>
            <Card.Text>
              Rs.{item.price}
            </Card.Text>
            <Button variant="primary" onClick={()=>{navigate(`/Admineditproduct/${item.id}`)}}>Edit</Button>&nbsp;
            <Button variant="primary"onClick={()=>handleDelete(item.id)}>Delete</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
    </>
  );
}

export default Adminproduct;
