import "./App.css";
import { Header, MockmanAPI } from "./components/components";
import { LandingPage, Home, Login, SignUp } from "./pages/pages";
import { Routes, Route } from "react-router-dom";
import { DisplayNotesCardModal } from "./components/DisplayNotesCardModal/DisplayNotesCardModal";

const App = () => {
  return (
    <div className="App position-r">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/mockman" element={<MockmanAPI />}></Route>
      </Routes>
    </div>
  );
};
export default App;
