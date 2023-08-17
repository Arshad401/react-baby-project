import React, { useContext, useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { myContext } from "./Context";
import { useNavigate } from "react-router-dom";

function Loginpage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userData } = useContext(myContext);
  const { isLoggedIn, setIsLoggedIn } = useContext(myContext);
  const navigate = useNavigate();
  const {setLogindUser}=useContext(myContext)
  const handleSubmit = (e) => {
    e.preventDefault();
    const userinfo = userData.filter(
      (value) => value.email === email && value.password === password
    );
    if (userinfo.length > 0) {
      setLogindUser(userinfo[0].name)
      setIsLoggedIn(!isLoggedIn);
      navigate("/");
    } else {
      alert("invalid credential");
    }
  };
  return (
    <div className="login">
      <Form className="login-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
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
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          LogIn
        </Button><br/>
        <Button style={{marginTop:'5px'}} onClick={()=>{navigate("/Adminlogin")}}>Admin Login</Button>
      </Form>
    </div>
  );
}

export default Loginpage;
