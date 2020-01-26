import React from "react";

const Bid = props => {
  const { lot, url } = props;

  return (
    <p>
      <img src={url} style={{ width: "100px", height: "100px" }} />
      {lot.data().lotName}, £{lot.data().currentBid.toFixed(2)}, Table:
      {lot.data().bidderTableNo}
    </p>
  );
};

export default Bid;
