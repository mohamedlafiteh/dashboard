import React, { Component } from "react";
import FirstSlideTotaliser from "./slides/FirstSlideTotaliser";
import SecondSlideInformation from "./slides/SecondSlideInformation";
import ThirdSlidePlaceholder from "./slides/ThirdSlidePlaceholder";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export class Home extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <FirstSlideTotaliser />
        <SecondSlideInformation />
        <ThirdSlidePlaceholder />
      </Slider>
    );
  }
}

export default Home;
