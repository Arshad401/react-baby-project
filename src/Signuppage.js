import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { myContext } from "./Context";
import { useNavigate } from "react-router-dom";

function Signuppage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userData, setUserData } = useContext(myContext);
  const navigate = useNavigate ()
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData(
      (info) =>
        (info = [...userData, { name: name, email: email, password: password }])
    );
    alert("User Registration Successful");
  };

  return (
    <div className="signup" >
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your name"
            onChange={(e) => {
              setName(e.target.value);
            }}required
          />
          <br />
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}required
          />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Repeat Password</Form.Label>
        <Form.Control type="password" placeholder="Password again" />
      </Form.Group> */}
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          SignUp
        </Button>
        <p>All ready have an Account ?</p>
        <Button onClick={()=>{navigate("/login")}}>Login Here</Button>
      </Form>
    </div>
  );
}

export default Signuppage;
