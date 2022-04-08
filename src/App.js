import "./App.css";
import { Header } from "./components/components";
import { LandingPage, Home, Login } from "./pages/pages";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </div>
  );
};
export default App;
