import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { NotesDataContextProvider } from "./contexts/notesDataContext";
import { ShowNoteContextProvider } from "./contexts/showNotesContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NotesDataContextProvider>
        <ShowNoteContextProvider>
          <App />
        </ShowNoteContextProvider>
      </NotesDataContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
