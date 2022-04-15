import "./App.css";
import { Header } from "./components/components";
import { Home } from "./pages/pages";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
};
export default App;
