import React from "react";
import HeaderMain from "../components/HeaderMain";
import FooterMain from "../components/FooterMain";
import Home from "../components/Home";
import Testimonials from "../components/Testimonials";
import Menu from "../components/Menu";

export default function MainPage() {
  return (
    <div>
      <HeaderMain />
      <Home />
      <Menu />
      <Testimonials />
      <FooterMain />
    </div>
  );
}
