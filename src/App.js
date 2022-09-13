import "./App.scss";
import HeaderMain from "./components/HeaderMain";
import FooterMain from "./components/FooterMain";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <HeaderMain />
      <Home />
      <FooterMain />
    </div>
  );
}

export default App;
