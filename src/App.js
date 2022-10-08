import "./App.scss";
import MainPage from "./pages/mainPage";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";

function App() {
  return (
    <Routes>
      <Route path="MainPage" element={<MainPage />} />
      <Route path="RegisterPage" element={<RegisterPage />} />
      <Route path="Login" element={<Login />} />
    </Routes>
  );
}

export default App;
