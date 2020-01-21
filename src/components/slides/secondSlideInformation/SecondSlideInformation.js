import React, { Component } from "react";
import "./SecondSlideInformation.css";
import imgBackground from "./water2.jpg";

const imageChange = [
  {
    imageUrl:
      "https://images.pexels.com/photos/3380967/pexels-photo-3380967.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    text: "Hello world."
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&dpr=1&w=500",
    text: "WaterAid is great ."
  },
  {
    imageUrl:
      "https://images.pexels.com/photos/3464632/pexels-photo-3464632.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    text: " the Serengeti is beautiful."
  }
];

export class SecondSlideInformation extends Component {
  state = {
    pic: [],
    text: ""
  };

  componentDidMount() {
    setInterval(() => {
      this.shuffle(imageChange);
    }, 4000);
  }
  shuffle = arr => {
    var i, j, temp;
    for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    //console.log("this is arr" + arr[0].imageUrl);
    this.setState({
      pic: arr[0].imageUrl,
      text: arr[0].text
    });
  };
  render() {
    const { pic, text } = this.state;
    return (
      <div className='polaroid'>
        <img src={pic} alt='' style={{ width: "105%" }} />
        <div className='container'>
          <p>{text}</p>
        </div>
      </div>
    );
  }
}

export default SecondSlideInformation;
