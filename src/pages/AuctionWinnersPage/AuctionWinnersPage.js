import React, { Component } from "react"

import WinnerTable from "./WinnerTable"
import "./AuctionWinnersPage.css";

export class AuctionWinnersPage extends Component {

    render() {
        return (
            <WinnerTable lots={this.props.lots} users={this.props.users} />
        );
    }

}
export default AuctionWinnersPage;
