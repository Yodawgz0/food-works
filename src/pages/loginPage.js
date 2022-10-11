import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUtensils} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  };
 
  const navigate = useNavigate();

  return (
    <>
      <div className="maincontainer">
        <div className="maincontainer__bord1">
          <div className="maincontainer__bord2">
            <div className="maincontainer__bord3">
              <div className="maincontainer__bord4">
                <div className="maincontainer__container formcontainer">
                  <div className="formcontainer__style">
                    <h1 className="forrmContainer__mainHeading">WELCOME TO</h1>
                    <h1 className="forrmContainer__mainHeading">DEEPLIGHT</h1>
                    <h5 className="forrmContainer__subHeading">RESTAURANT</h5>
                    <FontAwesomeIcon icon={faUtensils } size="7x" color="black" />
                  </div>
                  <div className="formcontainer__restaurantname">
                    <h2>LOGIN</h2>
                    <Form>
                      <Form.Group className="m-2" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                        </Form.Text>
                      </Form.Group>

                      <Form.Group
                        className="m-2"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </Form.Group >
                      <Button className="m-2"
                        variant="info"
                        type="submit"
                        onClick={(e) => handleSubmit(e)}
                        onClick={()=>navigate("/MainPage")}
                      >
                        Submit
                      </Button>
                      <Form.Group className="m-2">
                        <Form.Label>Don't have an account?</Form.Label>
                        <Button className="m-2 " variant="info" onClick={()=>navigate("/RegisterPage")}>
                          Sign-Up
                        </Button>
                      </Form.Group>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
