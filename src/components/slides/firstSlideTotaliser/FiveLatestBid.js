import React, { Component } from "react";
import Bid from "./Bid";
import { getImageForLot } from "../../../dao/LotDao";

const getDateFromSeconds = date => {
  if (date !== null) {
    return new Date(date.seconds * 1000);
  } else {
    return null;
  }
};

export class FiveLatestBid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageDictionary: {}
    };
  }

  getFiveLatest = () => {
    return this.props.lots
      .filter(function(el) {
        return el.data().lastBidTime != null;
      })
      .sort(function(o1, o2) {
        let a = getDateFromSeconds(o1.data().lastBidTime);
        let b = getDateFromSeconds(o2.data().lastBidTime);
        return a > b ? -1 : a < b ? 1 : 0;
      })
      .slice(0, 5);
  };

  getImageUrl = lot => {
    let imageUrl = this.state.imageDictionary[lot.id];
    if (!this.state.imageDictionary[lot.id]) {
      getImageForLot(lot.id, lot.data().image)
        .getDownloadURL()
        .then(url => {
          this.setState(state => ({
            imageDictionary: {
              ...state.imageDictionary,
              [lot.id]: url
            }
          }));
        });
    }
    return imageUrl;
  };

  render() {
    const fiveLatest = this.getFiveLatest();
    return (
      <div>
        <h1>5 Latest Bids:</h1>
        <div>
          {fiveLatest.map((lot, index) => {
            let imageUrl = this.getImageUrl(lot);
            return <Bid lot={lot} key={index} url={imageUrl} />;
          })}
        </div>
      </div>
    );
  }
}

export default FiveLatestBid;
