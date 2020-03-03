import React from "react";
import image from "../../../images/image.png";
import "./ThirdSlidePlaceholder.css";

class ThirdSlidePlaceholder extends React.Component {
  getBidForTable = (tableNumber, bidArray) => {
    if (bidArray[tableNumber]) {
      return bidArray[tableNumber].bid;
    }
    return 0;
  };

  loopArray = () => {
    let tables = [];
    this.props.lots.forEach(el => {
      let currentBid = el.currentBid || 0;
      let tableBid = this.getBidForTable(el.currentBidderTable, tables);
      let item = {
        table: el.currentBidderTable,
        bid: currentBid + tableBid
      };
      tables[el.currentBidderTable] = item;
    });
    return tables.sort((a, b) => b.bid - a.bid);
  };

  render() {
    let allTableTotals = this.loopArray();

    return (
      <div className='main'>
        <div className='imageContainer'>
          <div className='titleContainer'>
            <h1 className='title'>
              Is someone at your table making a big donation to WaterAid right
              now?
            </h1>
          </div>

          <div id='images'>
            {allTableTotals.map((item, index) => (
              <div key={index}>
                <img src={image} className='tablePic' />
                <div id='text'> £{item.bid}</div>
                <div>
                  <div className='table'>Table: {item.table}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ThirdSlidePlaceholder;
