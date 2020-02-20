import React from "react";
import { getLots } from "../dao/LotDao";
import { processChange } from "../lotProcessor/ChangeProcessor";
import Header from "./Header";
import Footer from "./Footer";
import FirstSlideTotaliser from ".././components/slides/firstSlideTotaliser/FirstSlideTotaliser";
import ThirdSlidePlaceholder from ".././components/slides/thirdSlidePlaceholder/ThirdSlidePlaceholder";
import SecondSlide from ".././components/slides/secondSlideInformation/SecondSlide";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lots: [],
      currentPicture: 0
    };
  }

  componentDidMount() {
    getLots().onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        processChange(change, this);
      });
    });
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
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: (current, next) => this.changeSlide(next)
    };
    return (
      <div>
        <Header />
        <Slider {...settings}>
          <FirstSlideTotaliser lots={this.state.lots} />
          <SecondSlide current={this.state.currentPicture} />
          <ThirdSlidePlaceholder lots={this.state.lots} />
        </Slider>
        <Footer />
      </div>
    );
  }
}

export default MainPage;
