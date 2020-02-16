import React, { Component } from "react"

import WinnerTable from "./WinnerTable"
import "./AuctionWinnersPage.css";

export class AuctionWinnersPage extends Component {


    render() {
        return (
            <div >
                <WinnerTable data={this.props.data} />
            </div>
        );
    }

}
export default AuctionWinnersPage;