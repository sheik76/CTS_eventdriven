import React from "react";
import Navbar from "./components/Navbar";
import SignIn from "./sections/SignIn";
import About from "./sections/About";
import SignUP from "./sections/SignUP";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUP />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
