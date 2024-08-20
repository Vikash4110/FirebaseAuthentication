import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
