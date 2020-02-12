import React from "react";

const Bid = props => {
  const lotName = props.lot.data().lotName;
  const currentBid = props.lot.data().currentBid;
  const bidderTableNo = props.lot.data().currentBidderTable
    ? props.lot.data().currentBidderTable
    : "n/a";
  const url = props.url;

  return (
    <div className="bid">
      <div
        className="bidItem bidImage"
        style={{ backgroundImage: `url(${url})` }}
      ></div>

      <div className="bidItem bidName"> {lotName}</div>
      <div className="bidItem">£{currentBid}</div>
      <div className="bidItem">Table: {bidderTableNo}</div>
    </div>
  );
};

export default Bid;
