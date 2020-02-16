import React from "react"

import LotRetrievalComponent from "../lotProcessor/LotRetrievalComponent";
import { getImageForLot, getCurrentBiddersFullNames } from "../dao/LotDao";
import "./AuctionWinnersPage.css";

export class AuctionWinnersPage extends LotRetrievalComponent {
    constructor(props) {
        super(props);
        this.state = {
            ...this.state, final: 0,
            bids: [
                { lotImage: "", lotName: "", FirstName: "", SureName: '' }
            ],
            imageDictionary: [],
            data: ""
        }
    }

    renderTableHeader() {
        let header = Object.keys(this.state.bids[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    renderTableData() {
       return this.state.lots.filter(lot=>lot.data().currentBidder !==undefined).slice(0, 8).map((lot, index) => {
            // const { id, currentBidderTable, currentBidder, currentBid, currentBidderEmail } = bid //destructuring

            let imageUrl = this.getImageUrl(lot);
           // let BiddersFullName = lot.data().currentBidder ? getCurrentBiddersFullNames(lot.data().currentBidder) : "Not Found";
           // console.log("bider full name", BiddersFullName) 
        
            // console.log("at renderTable", lot.data().currentBidder)
            return (
                <tr key={index}>
                    <td className="lotsImage" style={{ backgroundImage: `url(${imageUrl})` }}></td>
                    <td >{lot.data().lotName}</td>
                    <td>{BiddersFullName}</td>
                    {/* <td>{currentBid}</td>
                    <td>{currentBidderEmail}</td> */}
                </tr>
            )
        })
    }

    

    // currentBiddersNames() {
    //     // console.log("get names", this.currentBiddersNames())
    //     getCurrentBiddersFullNames(currentBidder).then(snapshot => {
    //         snapshot.forEach(doc => {
    //             if(doc.data() === null){
    //                 throw "Error getting user by bidder Code"
    //             }
    //            return ({data: doc.data()})
    //         })
    //     }).catch((error) => {
    //         console.log(error)
    //     });
    // }


    // filter((lot) => lot.data().currentBidder.length !== undefined)

    getImageUrl = lot => {
        let imageUrl = this.state.imageDictionary[lot.id];
        if (!imageUrl) {
            getImageForLot(lot.id, lot.data().image)
                .getDownloadURL()
                .then(url => {
                    this.setState(state => ({
                        imageDictionary: {
                            ...state.imageDictionary,
                            [lot.id]: url
                        }
                    }));
                });
        }
        return imageUrl;
    };


    render() {
        console.log("this at render data", this.state.data)
        // this.state.lots.forEach((lot) => console.log("inside render", lot.data().currentBidder))
        return (
            <div className="screen">
                <div className="background" style={{ display: "flex", flexDirection: "row" }}>
                    <div className="list">
                        <h2 > This is Final Page{this.state.final} </h2>

                        <div>
                            <h1 id='title'>React Dynamic Table</h1>
                            <table id='bids'>
                                <tbody>
                                    <tr>{this.renderTableHeader()}</tr>
                                    {this.renderTableData()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        );
    }

}
export default AuctionWinnersPage;