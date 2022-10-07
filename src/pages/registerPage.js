import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function RegisterPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
    return (
        <div className="registercontainer">
        <div className="registercontainer__bord1">
          <div className="registercontainer__bord2">
            <div className="registercontainer__bord3">
              <div className="registercontainer__bord4">
                <div className="registercontainer__rcontainer rformcontainer">
                  <div className="registerformcontainer__restaurantname">
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
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="number" placeholder="Number" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Create Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      <Button
                        variant="dark"
                        type="submit"
                        onClick={(e) => handleSubmit(e)}
                      >
                        Submit
                      </Button>
                    </Form>
                  </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}