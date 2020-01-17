import React, { Component } from "react";
import "./SecondSlideInformation.css";
import imgBackground from "./water.jpg";

export class SecondSlideInformation extends Component {
  render() {
    return (
      <div className='polaroid'>
        <img src={imgBackground} alt='' style={{ width: "100%" }} />
        <div className='container'>
          <p>Second slide</p>
        </div>
      </div>
    );
  }
}

export default SecondSlideInformation;
