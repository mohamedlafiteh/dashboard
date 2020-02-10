import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LotRetrievalComponent from "./lotProcessor/LotRetrievalComponent";

//import Button from "@material-ui/core/Button";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <LotRetrievalComponent />
        <Footer />
      </div>
    );
  }
}

export default App;
