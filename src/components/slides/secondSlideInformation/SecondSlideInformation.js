import React from "react";
import "./SecondSlideInformation.css";

export default function SecondSlideInformation(props) {
  return (
    <div>
      <div style={user}>
        <img className='imgStyle' src={props.picture} />
      </div>
      <div className='textStyle'>{props.info}</div>
      <br />
      <div className='textStyle'>{props.caption}</div>
      <br />
      <div className='textStyle'>{props.credit}</div>
    </div>
  );
}

const user = {
  width: "400px",
  height: "60px",
  margin: "2em 0"
};
