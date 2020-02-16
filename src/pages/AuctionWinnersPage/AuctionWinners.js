import React, { Component } from "react";
import AuctionWinnersPage from "./AuctionWinnersPage"


import LotRetrievalComponent from "../../lotProcessor/LotRetrievalComponent";
import { getImageForLot, getCurrentBiddersFullNames } from "../../dao/LotDao";

import "./AuctionWinnersPage.css";


export class AuctionWinners extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.state, final: 0,
            data: [
                { lotImage: "image 1", lotName: "Shop 1", userForename: "Ak", userSurname: ' John' },
                { lotImage: "image 2", lotName: "Shop 2", userForename: "Bab", userSurname: ' Kim ' },
                { lotImage: "image 3", lotName: "Shop 3", userForename: "Cal", userSurname: ' Bing' }
            ],
            imageDictionary: []
        }
    }


    render() {
        return (
            <div className="screen">
                <div className="background" style={{ display: "flex", flexDirection: "row" }}>
                    <div className="list">
                        <h2 > This is Final Page </h2>
                        <AuctionWinnersPage data={this.state.data} />
                    </div>
                </div>
            </div>
        );


    }
}

export default AuctionWinners;