import React, { Component } from "react"

import LotRetrievalComponent from "../lotProcessor/LotRetrievalComponent"
// import Bid from "../components/slides/firstSlideTotaliser/Bid";
// import { getImageForLot } from "../dao/LotDao";
import "./AuctionWinnersPage.css";

export class AuctionWinnersPage extends LotRetrievalComponent {
    constructor(props) {
        super(props);
        this.state = {
            final: 0,
            lots: []
        }
    }
    
    componentDidMount = () => {
        this.call()
    }

    // getBids = () => {
    //     let bab = this.props.lots
    //     .filter(function(el) {
    //         return el.data().lastBidTime != null;
    //     })
    //     console.log("hw1w", this.props)
    //     return bab;
    // }

    getWinner() {
        return
    }

    call = () => {
        console.log("at the call",this.props.lots)
        const numbers = [1, 2, 3, 4, 5];
        const listItems = numbers.map((number) =>
            <div  styles="overflow-x:auto!important;">
            <table className="table" >
                <tr>
                    <th> Lot Image Lot Name </th>
                    <th> Firstname Lastname </th>
                </tr>
                <tr>
                    <td> <li>{number}</li> </td>
                    <td> <li>{number}</li> </td>
                </tr>
            </table>
            </div>
        );
        return listItems;
    }

    render() {
        console.log("at render",this.props.lots)
        return (
            <div className="screen">
                <div className="background" style={{ display: "flex", flexDirection: "row" }}>
                    <div className="list">
                        <h2 > This is Final Page{this.state.final} </h2>
                        <div >
                            {/* {this.call()}                              */}
                            {console.log(this.props.lots)}
                        </div>
                    </div>
                </div>

            </div>
        );
    }

}
export default AuctionWinnersPage;