import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  };

  return (
    <>
      <div className="maincontainer">
        <div className="maincontainer__bord1">
          <div className="maincontainer__bord2">
            <div className="maincontainer__bord3">
              <div className="maincontainer__bord4">
                <div className="maincontainer__container formcontainer">
                  <div className="formcontainer__restaurantname">
                    <h1>DEEPLIGHT RESTAURANT</h1>
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
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
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                      </Form.Group>
                      <Button
                        variant="dark"
                        type="submit"
                        onClick={(e) => handleSubmit(e)}
                      >
                        Submit
                      </Button>
                      <Form.Group>
                        <Form.Label>Don't have an account?</Form.Label>
                      </Form.Group>
                      <Form.Group>
                        <Button variant="dark" type="submit">
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
