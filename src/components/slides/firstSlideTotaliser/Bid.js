import React from "react";

const Bid = props => {
  const lotName = props.lot.data().lotName;
  const currentBid = props.lot.data().currentBid.toFixed(2);
  const bidderTableNo = props.lot.data().bidderTableNo;
  const url = props.url;

  return (
    <p>
      <img src={url} style={{ width: "100px", height: "100px" }} />
      <span> {lotName}</span>
      <span>£{currentBid}</span>
      <span>Table:{bidderTableNo}</span>
    </p>
  );
};

export default Bid;
