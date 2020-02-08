import React, { Component } from "react"
// import Bid from "../components/slides/firstSlideTotaliser/Bid";
// import { getImageForLot } from "../dao/LotDao";
import "./AuctionWinnersPage.css";

// const getDateFromSeconds = date => {
// if (date !== null) {
// return new Date(date.seconds * 1000);
// } else {
// return null;
// }
// };

export class AuctionWinnersPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            final: 0,
            imageDictionary: {}
        }
    }

    getBids() {
        return
    }

    getWinner() {
        return
    }

    // getFiveLatest = () => {
    // return this.props.lots
    // .filter(function (el) {
    // return el.data().lastBidTime != null;
    // })
    // .sort(function (o1, o2) {
    // let a = getDateFromSeconds(o1.data().lastBidTime);
    // let b = getDateFromSeconds(o2.data().lastBidTime);
    // return a > b ? -1 : a < b ? 1 : 0;
    // })
    // .slice(0, 5);
    // };


    render() {
        // const fiveLatest = this.getFiveLatest();
        return (
            <div className="polaroid">

                <div className="background" style={{ display: "flex", flexDirection: "row" }}>

                    <div className="list">
                        <h2 > This is Final Page{this.state.final} </h2>
                        <ul>
                            <li> 1. Finally </li>
                            <li> 2. Arranged </li>
                            <li> 3. your Tasks </li>
                        </ul>
                    </div>
                    {/* <div className="fiveLatestBids-component">
<h2 className="titleFiveLatestBids">Top 5 Latest Bids:</h2>
<div className="bids-wrapper">
{ <Bid lot={lot} />; })}
</div>
</div> */}
                </div>

            </div>
        );
    }

}
export default AuctionWinnersPage;