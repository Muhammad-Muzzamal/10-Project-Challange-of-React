import React from "react";
import "./Nav.css";

export default function App() {
  return (
    <nav>
      <div className="logo">
        <img src="/images/brand_logo.png" alt="logo image" />
      </div>
      <ul>
        <li>MENU</li>
        <li>LOCATION</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
      <button className="login-btn">Login</button>
    </nav>
  );
}
