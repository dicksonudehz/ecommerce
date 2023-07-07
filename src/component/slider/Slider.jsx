import React from "react";
import "./slider.css";

function Slider() {
  return (
    <>
      <div className="sliderContainer">
        <div className="sliderContainerImg">
          <img src="banner/pic1.jpg" alt="" className="sliderImg" />
          <div className="sliderContainerItems">
            <h1>quality african breakfast</h1>
            <h6> from TAMs collection of organic</h6>
            <button className="orderButton">order now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
