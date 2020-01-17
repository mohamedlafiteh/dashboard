import React, { Component } from "react";
import "./FirstSlideTotaliser.css";
import imgBackground from "./water.jpg";

export class FirstSlideTotaliser extends Component {
  render() {
    return (
      <div className='polaroid'>
        <img src={imgBackground} alt='' style={{ width: "100%" }} />
        <div className='container'>
          <p>First slide</p>
        </div>
      </div>
    );
  }
}

export default FirstSlideTotaliser;
