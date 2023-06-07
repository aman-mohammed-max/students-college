import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./Screens/Main";
import { BrowserRouter } from "react-router-dom";
import Auth from "./Screens/auth";

function App() {
  return (
    <BrowserRouter>
      <Auth />
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
