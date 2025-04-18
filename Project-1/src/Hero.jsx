import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="section1">
        <div className="h1">YOUR FEET DESERVE THE BEST</div>
        <div className="h2">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </div>
        <div className="btns">
          <button className="btn1">Shop Now </button>
          <button className="btn2">Category</button>
        </div>
        <div className="additional">
          <div>Also Available On</div>
          <img src="images/flipkart.png" alt="flipkart logo" />
          <img src="images/amazon.png" alt="amazon logo" />
        </div>
      </div>


      <div className="section2">
        <img src="/images/shoe_image.png" alt="" />
      </div>
    </div>
  );
}
