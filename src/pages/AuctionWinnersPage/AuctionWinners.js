import React from "react";
import AuctionWinnersPage from "./AuctionWinnersPage"

import { getLots, getAllUsers } from "../../dao/LotDao";
import { processChange } from "../../lotProcessor/ChangeProcessor";

import "./AuctionWinnersPage.css";

export class AuctionWinners extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        lots: [],
        users: [],
        imageDictionary: {}
      }
  }

  componentDidMount() {
    getLots().onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        processChange(change, this);
      });
    });
    getAllUsers().onSnapshot(snapshot => {
      snapshot.forEach(doc => {
        this.state.users.push(doc.data());
      });
    });
  }

  render() {
      return (
          <div className="screen">
              <div className="background" style={{ display: "flex", flexDirection: "row" }}>
                  <h2 className="listText"> Congratulations! </h2>
                  <div>
                      <AuctionWinnersPage lots={this.state.lots} users={this.state.users} images={this.state.imageDictionary}  />
                  </div>
              </div>
              <h1 className="footerText"> Please visit the WaterAid event table to claim your item.</h1>
          </div>
      );
  }
}

export default AuctionWinners;
