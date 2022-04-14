import "./App.css";
import { Header } from "./components/components";
import { LandingPage, Home } from "./pages/pages";
import { Routes, Route } from "react-router-dom";
import { DisplayNotesCardModal } from "./components/DisplayNotesCardModal/DisplayNotesCardModal";

const App = () => {
  return (
    <div className="App position-r">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/modal" element={<DisplayNotesCardModal />}></Route>
      </Routes>
    </div>
  );
};
export default App;
