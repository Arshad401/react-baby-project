import React, { useContext } from "react";
import Table from "react-bootstrap/Table";
import { myContext } from "./Context";
import { Container } from "react-bootstrap";
import Adminheader from "./Adminheader";

function Adminusersec() {
  const { userData } = useContext(myContext);
  return (
    <>
    <Adminheader />
    <div className="addproduct">
    <Container className="add">

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sl No</th>
            <th>Name</th>
            <th>Email</th>
            
          </tr>
        </thead>
        <tbody>
          {userData.map((data, index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
             
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
    </div>
    </>
  );
}

export default Adminusersec;
