import React from "react";

class ThirdSlidePlaceholder extends React.Component {
  loopArray = () => {
    let newArray = [];

    this.props.lots.forEach(el => {
      return newArray.push([
        el.data().currentBidderTable,
        el.data().currentBid
      ]);
    });
    console.log(newArray);
    return newArray;
  };
  render() {
    this.loopArray();
    return (
      <div>
        <h1>Slide Three</h1>
      </div>
    );
  }
}

export default ThirdSlidePlaceholder;
