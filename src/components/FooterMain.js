import React from "react";
import { faFacebook , faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function FooterMain() {
  return (
    <div className="footerContainer">
      <h2>____</h2>
      <h1>DEEPLIGHT</h1>
      <h5>RESTAURANT</h5>
      <div className="footerContainerredline"></div>
      <div className="footerContainerContact">
        <h5>You can reach us at</h5>
        <h2>______________________________</h2>
        <h1>+1 123 456 7890</h1>
    </div>
    <div className="footerContainerAddress">
      <h5>Address</h5>
      <h6>13 Fifth Avenue, New York</h6>
    </div>
    <div className="footerContainerSocial">
      <a href="https://facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
      <a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
      <a href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
    </div>
    </div>
  );
}
