import "./App.css";
import { Header, MockmanAPI, RequiresAuth } from "./components/components";
import { LandingPage, Home, Login, SignUp, Archive } from "./pages/pages";
import { Routes, Route } from "react-router-dom";
import { PublicRoute } from "./components/publicRoute/PublicRoute";
import TwopiRest from "twopi-rest";
const App = () => {
  return (
    <div className="App position-r">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>

        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        ></Route>

        <Route
          path="/signup"
          element={
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          }
        ></Route>

        <Route
          path="/home"
          element={
            <RequiresAuth>
              <Home />
            </RequiresAuth>
          }
        ></Route>
        <Route
          path="/archive"
          element={
            <RequiresAuth>
              <Archive />
            </RequiresAuth>
          }
        ></Route>
        <Route path="/mockman" element={<MockmanAPI />}></Route>
      </Routes>
    </div>
  );
};
export default App;
