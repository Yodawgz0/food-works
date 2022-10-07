import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function HeaderMain() {
  const toggleButton = document.getElementsByClassName("toggle-button")[0];
  const navbarLinks = document.getElementsByClassName("navbar-links")[0];

  const handlePhoneMenu = () => {};
  toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
  });

  const navDetails = [
    "Home",
    "Menu",
    "About",
    "Gallery",
    "Testimonials",
    "Contact",
  ];
  return (
    <div className="Parent">
      <nav className="navbar1">
        <div className="Options">Options</div>
        <a href="#" className="toggle-button">
          {/* Make this Icon */}
          <FontAwesomeIcon icon="fa-solid fa-bars" />
        </a>
        <div className="navbar-links">
          {/* Map please here  */}
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="HeaderContainer">
        <h2>___</h2>
        <h1 className="HeaderContainer__mainHeading">DEEPLIGHT</h1>
        <h5 className="HeaderContainer__subHeading">RESTAURANT</h5>
        <nav className="navbar">
          <ul className="navbar__ulattributes">
            {navDetails.map((element, index) => {
              return (
                <li className="navbar__liattributes">
                  <a className="navbar__navlinks" key={index} href="{#}">
                    {element}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
