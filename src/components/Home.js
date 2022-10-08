import React from "react";
import MainPic from "../assets/cooking board.png";
import AboutPic from "../assets/tables.png";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";
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
        <FormGroup>
            <FormLabel>Date:</FormLabel>
            <FormControl type="date" placeholder="Enter the date"/>
          </FormGroup>
          <FormGroup>
            <FormLabel>Time:</FormLabel>
            <FormControl type="time" placeholder="Enter the time"/>
          </FormGroup>
          <FormGroup>
            <FormLabel>Number of Guests:</FormLabel>
            <FormControl type="number" placeholder="Enter the number"/>
          </FormGroup>
          <Form.Group>
          <Form.Label>Enter your full name:</Form.Label>
          <Form.Control type="text" placeholder="Enter your full name" />
        </Form.Group>
          <Button variant="success" onClick={props.onHide}> Submit</Button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        
        <Button variant="danger" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyVerticallyCenteredModal1(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Read More
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Deepligth Restaurant</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function Home() {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalShow1, setModalShow1] = React.useState(false);

  return (
    <div className="HomeContainer">
      <img alt="introHomeImage" src={MainPic} />
      <img alt="AboutPic" src={AboutPic} />

      <div className="InviteContainer">
        <h2 className="InviteContainer__mainHeading">delightful experiences</h2>
        <h1 className="InviteContainer__subHeading">
          Welcome to "Deeplight Restaurant"
        </h1>
        <>
      <Button variant="dark" onClick={() => setModalShow(true)}>
        RESERVATION
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
      </div>

      <div className="AboutContainer">
        <div className="AboutContainer__TopRedline"></div>
        <h2 className="AboutContainer__mainHeading">honest,flavorful food</h2>
        <h1 className="AboutContainer__subHeading">
          A FEW WORDS ABOUT OUR RESTAURANT
        </h1>
        <div className="AboutContainer__blackline"></div>
        <p className="AboutContainer__paragraph">
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
          cumque nihil impedit quo minus id quod maxime placeat facere possimus,
          omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
          autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
          eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
          Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
          voluptatibus maiores alias consequatur aut perferendis doloribus
          asperiores repellat."
        </p>
        <>
      <Button variant="danger" onClick={() => setModalShow1(true)}>
        READ MORE
      </Button>

      <MyVerticallyCenteredModal1
        show={modalShow1}
        onHide={() => setModalShow1(false)}
      />
    </>
        <div className="AboutContainer__Redline"></div>
      </div>
    </div>
  );
}
