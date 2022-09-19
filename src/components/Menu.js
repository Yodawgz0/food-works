import React from "react";
import Chefrec from "../assets/chefrec_img.png"
import maincourse from "../assets/maincourse_img.png"

export default function Menu(){
    return(
        <div className="menucontainer">
            <div className="menucontainer__redline"></div>
            <div className="menucontainer__suggestionheading"><h1>eat good food</h1></div>
            <div className="menucontainer__mainheading"><h1>Have A Quick Look At Our Menus</h1></div>
            <div className="menucontainer__blackline"></div>
            <div className="menucontainer__menudesc"><p>Le Deeplight est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.</p></div>
        {/* start of the menu part */}
            <div className="menulist">
                <div className="menulist__chefrecommend">
                <h1>Chef Recommend</h1>
                <section className="dishname">
                    <h2 className="dishname__mainname">Lamb Salad With Fregola<span> ---------$32.5</span></h2>
                    <h3 className="dishname__desc">Lamb/fregola</h3>
                </section>
                <section className="dishname">
                    <h2 className="dishname__mainname">Lamb Salad With Fregola<span> ---------$32.5</span></h2>
                    <h3 className="dishname__desc">Lamb/fregola</h3>
                </section>
                <section className="dishname">
                    <h2 className="dishname__mainname">Lamb Salad With Fregola<span> ---------$32.5</span></h2>
                    <h3 className="dishname__desc">Lamb/fregola</h3>
                </section>
                <section className="dishname">
                    <h2 className="dishname__mainname">Lamb Salad With Fregola<span> ---------$32.5</span></h2>
                    <h3 className="dishname__desc">Lamb/fregola</h3>
                </section>
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
                <h1>Chef Recommend</h1>
                <section className="dishname">
                    <h2 className="dishname__mainname">Lamb Salad With Fregola<span> ---------$32.5</span></h2>
                    <h3 className="dishname__desc">Lamb/fregola</h3>
                </section>
                <section className="dishname">
                    <h2 className="dishname__mainname">Lamb Salad With Fregola<span> ---------$32.5</span></h2>
                    <h3 className="dishname__desc">Lamb/fregola</h3>
                </section>
                <section className="dishname">
                    <h2 className="dishname__mainname">Lamb Salad With Fregola<span> ---------$32.5</span></h2>
                    <h3 className="dishname__desc">Lamb/fregola</h3>
                </section>
                <section className="dishname">
                    <h2 className="dishname__mainname">Lamb Salad With Fregola<span> ---------$32.5</span></h2>
                    <h3 className="dishname__desc">Lamb/fregola</h3>
                </section>
                </div>
                
            </div>
            <div className="endredline">
                    <div className="endredline__redline"></div>
                </div>
        
        
        
        
        
        </div>
        );
}