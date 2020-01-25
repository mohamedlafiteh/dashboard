import React, { Component } from "react";
import FirstSlideTotaliser from "./slides/firstSlideTotaliser/FirstSlideTotaliser";
import SecondSlideInformation from "./slides/secondSlideInformation/SecondSlideInformation";
import ThirdSlidePlaceholder from "./slides/thirdSlidePlaceholder/ThirdSlidePlaceholder";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import imgBackground1 from "./slides/secondSlideInformation/water2.jpg";
import imgBackground2 from "./slides/secondSlideInformation/water22.jpg";
import imgBackground3 from "./slides/secondSlideInformation/water222.jpg";

const imageChange = [
  {
    imageUrl: imgBackground1,
    text: "Hello world."
  },
  {
    imageUrl: imgBackground2,
    text: "WaterAid is great ."
  },
  {
    imageUrl: imgBackground3,
    text: " the Serengeti is beautiful."
  }
];
export class Home extends Component {
  state = {
    currentPicture: 0
  };

  changeSlide = current => {
    const activeSlide = current;

    if (activeSlide === 1) {
      this.setState(currentState => {
        return {
          currentPicture: (currentState.currentPicture + 1) % 3
        };
      });
    }
  };
  render() {
    const settings = {
      infinite: true,
      autoplay: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: (current, next) => this.changeSlide(next)
    };
    return (
      <Slider {...settings}>
        <FirstSlideTotaliser />
        <SecondSlideInformation
          picture={imageChange[this.state.currentPicture].imageUrl}
          text={imageChange[this.state.currentPicture].text}
        />
        <ThirdSlidePlaceholder />
      </Slider>
    );
  }
}

export default Home;
