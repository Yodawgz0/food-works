import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(age);
    console.log(password);
    alert("You have logged in!!");
    navigate("/MainPage");
  };

  return (
    <div className="registercontainer">
      <div className="registercontainer__bord1">
        <div className="registercontainer__bord2">
          <div className="registercontainer__bord3">
            <div className="registercontainer__bord4">
              <div className="registercontainer__rcontainer rformcontainer">
                <div className="rformcontainer__restaurantname">
                  <h2>SIGN UP </h2>
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
                    <Form.Group className="mb-3" controlId="formBasicAge">
                      <Form.Label>Age</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Create Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Group>
                    <Button
                      variant="danger"
                      type="submit"
                      onClick={(e) => handleSubmit(e)}
                    >
                      Submit
                    </Button>
                  </Form>
                </div>
                <div className="rformcontainer__style">
                  <h1 className="forrmContainer__mainHeading">WELCOME TO</h1>
                  <h1 className="forrmContainer__mainHeading">DEEPLIGHT</h1>
                  <h5 className="forrmContainer__subHeading">RESTAURANT</h5>
                  <FontAwesomeIcon icon={faUtensils} size="7x" color="black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
