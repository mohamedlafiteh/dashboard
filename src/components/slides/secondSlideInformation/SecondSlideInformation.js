import React from "react";
import "./SecondSlideInformation.css";

export default function SecondSlideInformation(props) {
  return (
    <div>
      <div className='user'>
        <img className='imgStyle' src={props.picture} />
        <div className='creditContainer'>
          <h2 className='creditStyle'>{props.credit}</h2>
        </div>
      </div>
      <h2 className='captionText'>{props.caption}</h2>
      <h2 className='textStyle'>{props.info}</h2>
    </div>
  );
}
