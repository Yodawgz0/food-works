import React from "react";
import MainPic from "../public/Mainpic.png";

export default function Home() {
  return (
    <div className="HomeContainer">
      <img alt="introHomeImage" src={MainPic} />

      <div className="InviteContainer">
        <h2>delightful experiences</h2>
        <h1>Welcome to "Deeplight Restaurant"</h1>
        <button>Reservation</button>
      </div>
    </div>
  );
}
