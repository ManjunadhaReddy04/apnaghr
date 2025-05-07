import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./homes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;

/*-------->>>>> NETLLIFY : https://pg-portal.netlify.app/home  <<<---------- */
