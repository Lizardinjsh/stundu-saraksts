import React from 'react';
import ReactDOM from "react-dom/client";
import App from "./App.js";

const noDOM = document.getElementById("root");
const root = ReactDOM.createRoot(noDOM);
root.render(
    <>
<React.StrictMode />
<App />
</>
);
