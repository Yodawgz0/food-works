import React from "react";
import Chefrec from "../assets/chefrec_img.png";
import maincourse from "../assets/maincourse_img.png";

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>;

export default function Menu() {
  const fooditem = [
    {
      id: "1",
      name: "Lamb Salad With Fregola",
      price: "$32.5",
      indi: "leaves, garlic, onion",
    },
    {
      id: "2",
      name: "Chicken Salad With Fregola",
      price: "$35.5",
      indi: "leaves, garlic, onion",
    },
    {
      id: "3",
      name: "Potato Salad With Fregola",
      price: "$10.5",
      indi: "leaves, garlic, onion",
    },
    {
      id: "4",
      name: "Califlower Salad With Fregola",
      price: "$82.5",
      indi: "leaves, garlic, onion",
    },
    {
      id: "5",
      name: "Tomato Salad With Fregola",
      price: "$22.5",
      indi: "leaves, garlic, onion",
    },
    {
      id: "6",
      name: "Brocolli Salad With Fregola",
      price: "$92.5",
      indi: "leaves, garlic, onion",
    },
    {
      id: "7",
      name: "Radish Salad With Fregola",
      price: "$12.5",
      indi: "leaves, garlic, onion",
    },
    {
      id: "8",
      name: "Risotto Pasta With Fregola",
      price: "$31.5",
      indi: "leaves, garlic, onion",
    },
  ];

  return (
    <div className="menucontainer">
      <div className="menucontainer__redline"></div>
      <div className="menucontainer__suggestionheading">
        <h1>eat good food</h1>
      </div>
      <div className="menucontainer__mainheading">
        <h1>Have A Quick Look At Our Menus</h1>
      </div>
      <div className="menucontainer__blackline"></div>
      <div className="menucontainer__menudesc">
        <p>
          Le Deeplight est simplement du faux texte employé dans la composition
          et la mise en page avant impression. Le Lorem Ipsum est le faux texte
          standard de l'imprimerie depuis les années 1500, quand un imprimeur
          anonyme assembla ensemble des morceaux de texte pour réaliser un livre
          spécimen de polices de texte.
        </p>
      </div>
      {/* start of the menu part */}
      <div className="menulist">
        <div className="menulist__chefrecommend">
          <h1>Chef Recommend</h1>
          {fooditem.map((element, index) => {
            return index < 4 ? (
              <section className="dishname">
                <h2 className="dishname__mainname">
                  {element.name}
                  <span key={index}> ---------${element.price}</span>
                </h2>
                <h3 className="dishname__desc">{element.indi}</h3>
              </section>
            ) : (
              <></>
            );
          })}
        </div>
        <div className="menulist__chefimage">
          <img alt="SampleImage" src={Chefrec} />
        </div>
      </div>

      <div className="menulist">
        <div className="menulist__chefimage">
          <img alt="SampleImage" src={maincourse} />
        </div>
        <div className="menulist__chefrecommend">
          <h1>We Recommend</h1>
          {fooditem.map((element, index) => {
            return index > 3 ? (
              <section key={index} className="dishname">
                <h2 className="dishname__mainname">
                  {element.name}
                  <span> ---------${element.price}</span>
                </h2>
                <h3 className="dishname__desc">{element.indi}</h3>
              </section>
            ) : (
              <></>
            );
          })}
        </div>
      </div>
      <div className="endredline">
        <div className="endredline__redline"></div>
      </div>
    </div>
  );
}
