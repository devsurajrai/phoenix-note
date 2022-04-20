import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";

import { ShowNoteContextProvider } from "./contexts/showNotesContext";
import { SignUpLoginValidateContextProvider } from "./contexts/signUpLoginValidationContext";
import { AuthContextProvider } from "../src/contexts/authContext";
import { NoteContextProvider } from "./contexts/noteContext";
import { ColorContextProvider } from "./contexts/colorContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <SignUpLoginValidateContextProvider>
        <ShowNoteContextProvider>
          <AuthContextProvider>
            <SignUpLoginValidateContextProvider>
              <NoteContextProvider>
                <ColorContextProvider>
                  <App />
                </ColorContextProvider>
              </NoteContextProvider>
            </SignUpLoginValidateContextProvider>
          </AuthContextProvider>
        </ShowNoteContextProvider>
      </SignUpLoginValidateContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
