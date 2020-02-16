import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import AuctionWinnersPage from "./pages/AuctionWinnersPage/AuctionWinners"
import NotFound from "./pages/NotFound"

//import Button from "@material-ui/core/Button";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/finalPage" component={AuctionWinnersPage} />
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
