import { Component } from "react";

import { getLots } from "../dao/LotDao";
import { processChange } from "./ChangeProcessor";

class LotRetrievalComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lots: [],
      users: []
    };

    this.getAllLots = this.getAllLots.bind(this);
    this.processLots = this.processLots.bind(this);
    // this.getAllUsers = this.getAllUsers.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
    this.getAllLots();
    // this.getAllUsers();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  getAllLots() {
    let newLots = getLots();
    this.processLots(newLots, this);
  }

  processLots(newLots, t) {
    if (newLots !== undefined) {
      newLots.onSnapshot(snapshot => {
        let changes = snapshot.docChanges();
        changes.forEach(change => {
          processChange(change, t);
        });
      });
    }
  }

  // getAllUsers() {
  //   let newUsers = getCurrentBiddersFullNames();
  //   return newUsers;
  // }

 
}

export default LotRetrievalComponent;
