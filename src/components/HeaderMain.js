import React from "react";

export default function HeaderMain() {
  const menuDetails = [
    "Home",
    "Menu",
    "About",
    "Gallery",
    "Testimonials",
    "Contact",
  ];
  return (
    <div className="HeaderContainer">
      <h2>___</h2>
      <h1 className="HeaderContainer__mainHeading">DEEPLIGHT</h1>
      <h5 className="HeaderContainer__subHeading">RESTAURANT</h5>
      <nav className="navbar">
        <ul className="navbar__ulattributes">
          {menuDetails.map((element, index) => {
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
  );
}
