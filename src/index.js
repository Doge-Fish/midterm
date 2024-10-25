import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Calculator from "./Calculator";
import MyOwn from "./myown";
import Map from "./Map";
// import Map from "./Map.js"

// Define some basic components for routing
const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;
const Contact = () => <h1>Contact Page</h1>;

console.log("hiasandas");

function App() {
  return (
    <Router>
      <nav
        style={{
          width: "100%",
          backgroundColor: "gray",
          padding: "20px",
        }}
      >
        <Link
          to="/"
          style={{
            backgroundColor: "green",
            marginRight: "10px",
            padding: "10px 20px",
          }}
        >
          Calculator
        </Link>
        <Link
          to="/map"
          style={{
            backgroundColor: "green",
            marginRight: "10px",
            padding: "10px 20px",
          }}
        >
          Map
        </Link>
        <Link
          to="/myown"
          style={{
            backgroundColor: "green",
            marginRight: "10px",
            padding: "10px 20px",
          }}
        >
          Tik-Tac-Toe
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/map" element={<Map />} />
        <Route path="/myown" element={<MyOwn />} />
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
