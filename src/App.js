import "./App.scss";
import HeaderMain from "./components/HeaderMain";
import FooterMain from "./components/FooterMain";
import Home from "./components/Home";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <HeaderMain />
      <Home />
      <Menu />
      <FooterMain />
    </div>
  );
}

export default App;
