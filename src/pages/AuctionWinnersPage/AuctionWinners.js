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
                { lotImage: "image 3", lotName: "Shop 3", userForename: "Cal", userSurname: ' Bing' },
                { lotImage: "image 4", lotName: "Shop 4", userForename: "Ak", userSurname: ' John' },
                { lotImage: "image 5", lotName: "Shop 5", userForename: "Bab", userSurname: ' Kim ' },
                { lotImage: "image 6", lotName: "Shop 6", userForename: "Cal", userSurname: ' Bing' },
                { lotImage: "image 7", lotName: "Shop 7", userForename: "Ak", userSurname: ' John' },
                { lotImage: "image 8", lotName: "Shop 8", userForename: "Bab", userSurname: ' Kim ' },
                { lotImage: "image 9", lotName: "Shop 9", userForename: "Cal", userSurname: ' Bing' },
                { lotImage: "image 10", lotName: "Shop 10", userForename: "Ak", userSurname: ' John' },
                { lotImage: "image 11", lotName: "Shop 11", userForename: "Bab", userSurname: ' Kim ' },
                { lotImage: "image 12", lotName: "Shop 12", userForename: "Cal", userSurname: ' Bing' }
            ],
            imageDictionary: []
        }
    }

    render() {
        return (
            <div className="screen">
                <div className="background" style={{ display: "flex", flexDirection: "row" }}>
                    <h2 className="listText"> Congratulation! </h2>
                    <div>
                        <AuctionWinnersPage data={this.state.data} />
                    </div>
                </div>
                <h1 className="footerText"> Please click <a href="/dashboard"> Here </a>  to claim your item </h1>
            </div>
        );
    }
}

export default AuctionWinners;