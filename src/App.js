import "./App.scss";
import MainPage from "./pages/mainPage";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/loginPage";

function App() {
  return (
    <Routes>
      <Route path="MainPage" element={<MainPage />} />
      <Route path="Login" element={<Login />} />
    </Routes>
  );
}

export default App;
