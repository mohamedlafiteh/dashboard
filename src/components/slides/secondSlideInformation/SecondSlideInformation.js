import React from "react";
import "./SecondSlideInformation.css";

export default function SecondSlideInformation(props) {
  return (
    <div>
      <div style={user}>
        <img className='imgStyle' src={props.picture} />

        <h2 className='creditStyle'>{props.credit}</h2>
      </div>
      <h2 className='captionText'>{props.caption}</h2>
      <h2 className='textStyle'>{props.info}</h2>
    </div>
  );
}

const user = {
  position: "relative",
  width: "450px",
  height: "70px",
  margin: "2em 0"
};
