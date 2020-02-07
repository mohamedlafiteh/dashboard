import React from "react";
import "./SecondSlideInformation.css";

export default function SecondSlideInformation(props) {
  return (
    <div>
      <div>
        <img style={imgStyle} src={props.picture} />
      </div>
      <div>
        <p className='text'>{props.text}</p>
      </div>
    </div>
  );
}

const imgStyle = {
  width: "800px",
  height: "650px",
  marginRight: "15px",
  float: "left"
};
