import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Axios configs
import axios from "axios";

const { VITE_PEXELS_API_KEY } = import.meta.env;

axios.defaults.baseURL = "https://api.pexels.com/";
axios.defaults.headers.common["Authorization"] = VITE_PEXELS_API_KEY;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
