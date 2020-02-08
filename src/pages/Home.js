import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FirstSlideTotaliser from "../components/slides/firstSlideTotaliser/FirstSlideTotaliser";
import SecondSlide from "../components/slides/secondSlideInformation/SecondSlide";
import ThirdSlidePlaceholder from "../components/slides/thirdSlidePlaceholder/ThirdSlidePlaceholder";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPicture: 0
    };
  }

  changeSlide = current => {
    if (current === 1) {
      this.setState(currentState => {
        return {
          currentPicture: currentState.currentPicture + 1
        };
      });
    }
  };

  render() {
    const settings = {
      infinite: true,
      //autoplay: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: (current, next) => this.changeSlide(next)
    };
    return (
      <div>
        <Header />
        <Slider {...settings}>
          <FirstSlideTotaliser />
          <SecondSlide current={this.state.currentPicture} />
          <ThirdSlidePlaceholder />
        </Slider>
        <Footer />
      </div>
    );
  }
}

export default Home;
