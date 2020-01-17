import React, { Component } from "react";
import FirstSlideTotaliser from "./slides/FirstSlideTotaliser";
import SecondSlideInformation from "./slides/SecondSlideInformation";
import ThirdSlidePlaceholder from "./slides/ThirdSlidePlaceholder";

export class Home extends Component {
  render() {
    return (
      <div>
        <FirstSlideTotaliser />
        <SecondSlideInformation />
        <ThirdSlidePlaceholder />
      </div>
    );
  }
}

export default Home;
