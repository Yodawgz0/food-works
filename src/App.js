import "./App.scss";
import HeaderMain from "./components/HeaderMain";
import FooterMain from "./components/FooterMain";
import Home from "./components/Home";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App">
      <HeaderMain />
      <Home />
      <Testimonials/>
      <FooterMain />
      
    </div>
  );
}

export default App;
