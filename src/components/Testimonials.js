import React from "react";
import BgPic from "../assets/test.png";
import ReservePic from "../assets/reservee.png";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>;
function MyVerticallyCenteredModal(props) {
  return (
    <Modal {...props}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Make A Reservation
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <FormGroup>
            <FormLabel>Date:</FormLabel>
            <FormControl type="date" placeholder="Enter the date" />
          </FormGroup>
          <FormGroup>
            <FormLabel>Time:</FormLabel>
            <FormControl type="time" placeholder="Enter the time" />
          </FormGroup>
          <FormGroup>
            <FormLabel>Number of Guests:</FormLabel>
            <FormControl type="number" placeholder="Enter the number" />
          </FormGroup>
          <Form.Group>
            <Form.Label>Enter your full name:</Form.Label>
            <Form.Control type="text" placeholder="Enter your full name" />
          </Form.Group>

          <Button variant="success" onClick={props.onHide}>
            {" "}
            Submit
          </Button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default function Testimonials() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="testcontainer">
      <img alt="BgPic" src={BgPic} />
      <img alt="ReservePic" src={ReservePic} className="centerpic" />
      <div className="testimonialcontainer">
        <h2 className="testimonialcontainer__mainheading">
          Our customers Fall in Love With Us
        </h2>
        <div className="testimonialcontainer__blackline"></div>
        <p className="testimonialcontainer__details">
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo."
        </p>
        <div className="testimonialcontainer__redline"></div>
      </div>
      <div className="ReservationContainer">
        <h3 className="ReservationContainer__smallheading">Join us</h3>
        <h2 className="ReservationContainer__heading">
          Book a table now, come and see us
        </h2>
        <Button variant="dark" onClick={() => setModalShow(true)}>
          RESERVATION
        </Button>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />

        <div className="ReservationContainer__bottomredline"></div>
      </div>
    </div>
  );
}
