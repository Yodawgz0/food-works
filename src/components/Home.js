import React from "react";


export default function Home() {
  return (
    <div className="HomeContainer">
      {<img src={require('./pic1.webp')} /> }
      <div className="InviteContainer">
        <h2>delightful experiences</h2>
        <h1>Welcome to "Deeplight Restaurant"</h1>
        <button>Reservation</button>
      </div>
    </div>


  );
  
}
