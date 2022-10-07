import React from "react";
import BgPic from "../assets/test.png";
import ReservePic from "../assets/reservee.png";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

function MyVerticallyCenteredModal(props) {
  return (
    <Modal 
      {...props}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Make A Reservation
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <label for="date">Date:</label><br/>
          <input type="date" id="date" required/><br/>
          <label for="time">Time:</label><br/>
          <input type="time" id="time" required/><br/>
          <label for="nos">Number Of Guests:</label><br/>
          <input type="number" id="nos" required/><br/>
          <label for="name">Reservation Name</label><br/>
          <input type="text" id="name" required/><br/>
          <Button variant="success" onClick={props.onHide}> Submit</Button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        
        <Button variant="danger" onClick={props.onHide}>Close</Button>
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
        <h3 className="ReservationContainer__smallheading">join us</h3>
        <h2 className="ReservationContainer__heading">
          Book a table Now, Come and See Us
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
