import React from "react";
import "./FirstSlideTotaliser.css";


import  Totaliser from "./Totaliser.js"
import LotRetrievalComponent from "../../../lotProcessor/LotRetrievalComponent.js";
import FiveLatestBid from "./FiveLatestBid";


class FirstSlideTotaliser extends LotRetrievalComponent {
  render() {
    return (
      <div className="polaroid">
        <div className="container">
          <FiveLatestBid lots={this.state.lots} />
            <Totaliser lots={this.state.lots} />
        </div>
      </div>
    );
  }
}

export default FirstSlideTotaliser;
