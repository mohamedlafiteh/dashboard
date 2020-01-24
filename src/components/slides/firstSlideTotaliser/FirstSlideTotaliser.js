import React from "react";
import "./FirstSlideTotaliser.css";
import LotRetrievalComponent from "../../../lotProcessor/LotRetrievalComponent.js";
import { getImageForLot } from "../../../dao/LotDao";
const getDateFromSeconds = date => {
  if (date !== null) {
    return new Date(date.seconds * 1000);
  } else {
    return null;
  }
};

export class FirstSlideTotaliser extends LotRetrievalComponent {
  getFiveLatest() {
    return this.state.lots
      .filter(function(el) {
        return el.data().lastBidTime != null;
      })
      .sort(function(o1, o2) {
        let a = getDateFromSeconds(o1.data().lastBidTime);
        let b = getDateFromSeconds(o2.data().lastBidTime);
        return a > b ? -1 : a < b ? 1 : 0;
      })
      .slice(0, 5);
  }

  render() {
    const fiveLatest = this.getFiveLatest();
    console.log("fiveLatest", fiveLatest);
    return (
      <div className="polaroid">
        <div className="container">
          <h1>Lots:</h1>
          <ul>
            {fiveLatest.map((lot, index) => {
              getImageForLot(lot.id, lot.data().image)
                .getDownloadURL()
                .then(url => {
                  console.log(
                    "lot.data().image",
                    lot.data().image,
                    "id",
                    lot.id,
                    "url",
                    url
                  );
                });
              return (
                <li key={index}>
                  Auction: {lot.data().lotName}, £
                  {lot.data().currentBid.toFixed(2)}, Table:{" "}
                  {lot.data().bidderTableNo}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default FirstSlideTotaliser;
