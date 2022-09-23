import React from "react";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FooterPic from "../assets/footer.png";

export default function FooterMain() {
  return (
    <div className="footerContainer">
      <img alt="FooterPic" src={FooterPic} />

      <div className="footContainer">
        <h1 className="footContainer__mainheading">DEEPLIGHT</h1>
        <h5 className="footContainer__subheading">RESTAURANT</h5>
        <h5 className="footContainer__contact">You can reach us at</h5>
        <div className="footContainer__blackline"></div>
        <h1 className="footContainer__number">+1 123 456 7890</h1>

        <h5 className="footContainer__address">Address</h5>
        <h6 className="footContainer__mainaddress">
          13 Fifth Avenue, New York
        </h6>

        <a className="footContainer__icons" href="https://facebook.com">
          <FontAwesomeIcon icon={faFacebook} size="2x" color="black" />
        </a>
        <a className="footContainer__icons" href="https://instagram.com">
          <FontAwesomeIcon icon={faInstagram} size="2x" color="black" />
        </a>
        <a className="footContainer__icons" href="https://twitter.com">
          <FontAwesomeIcon icon={faTwitter} size="2x" color="black" />
        </a>
      </div>
    </div>
  );
}
