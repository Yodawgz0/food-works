import React from "react";
import MainPic from "../assets/cooking board.png";
import AboutPic from "../assets/tables.png";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={props.onHide}> Submit</Button>
        <Button variant="danger" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


export default function Home() {
  const [modalShow, setModalShow] = React.useState(false);

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
        <button className="AboutContainer__ReadMorebutton">Read More</button>
        <div className="AboutContainer__Redline"></div>
      </div>
    </div>
  );
}
