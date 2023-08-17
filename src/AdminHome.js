// import React from "react";
// import Adminapparels from "./Adminapparels";
// import Adminproduct from "./Adminproduct";
import React,{useContext} from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { myContext } from "./Context";
import { useNavigate } from "react-router-dom";
import Adminheader from "./Adminheader";
import Adminslidepic from "./Adminslidepic";

function AdminHome() {
  const navigate = useNavigate()
  const { product, setProduct } = useContext(myContext);
  const prd = product.filter((data) => data.type === "product");
  const aprl= product.filter((data) => data.type === "Cloths");
  const handleDelete = (id) =>{
    const afterremoved = product.filter((item)=>{return item.id !== parseInt(id)})
    console.log(afterremoved);
    if (afterremoved.length>0){
     setProduct(afterremoved)
    }
   }

  return (
    <div>
      <div className="sticky-top">
        <Adminheader />
      </div>
      <Adminslidepic />

      <h1>Accessories</h1>
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

      {/* <Adminproduct /> */}

      <h1>Apparels</h1>
      <div className="Admincard-container">
      {aprl.map((item) => (
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
      {/* <Adminapparels /> */}
    </div>
  );
}

export default AdminHome;
