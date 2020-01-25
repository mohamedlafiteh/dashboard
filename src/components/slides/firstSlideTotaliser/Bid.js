import React, { Component } from "react";
import { getImageForLot } from "../../../dao/LotDao";

export class Bid extends Component {
  render() {
    return (
      <p>
        <img src={this.props.url} style={{ width: "100px", height: "100px" }} />
        Auction: {this.props.lot.data().lotName}, £
        {this.props.lot.data().currentBid.toFixed(2)}, Table:{" "}
        {this.props.lot.data().bidderTableNo}
      </p>
    );
  }
}

export default Bid;
