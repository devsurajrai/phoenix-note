import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";

import { NotesDataContextProvider } from "./contexts/notesDataContext";
import { ShowNoteContextProvider } from "./contexts/showNotesContext";
import { SignUpLoginValidateContextProvider } from "./contexts/signUpLoginValidationContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NotesDataContextProvider>
        <SignUpLoginValidateContextProvider>
          <ShowNoteContextProvider>
            <App />
          </ShowNoteContextProvider>
        </SignUpLoginValidateContextProvider>
      </NotesDataContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
