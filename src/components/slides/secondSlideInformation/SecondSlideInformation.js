import React, { Component } from "react";
import "./SecondSlideInformation.css";

export class SecondSlideInformation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='polaroid'>
        <img src={this.props.picture} alt='' style={{ width: "70%" }} />
        <div className='container'>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default SecondSlideInformation;
