import React from "react";
import MainPage from "./components/MainPage";

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuctionWinners from "./pages/AuctionWinnersPage/AuctionWinners"
import NotFound from "./pages/NotFound"

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/winners" component={AuctionWinners} />
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
