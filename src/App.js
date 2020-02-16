import React from "react";
import LotRetrievalComponent from "./lotProcessor/LotRetrievalComponent";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
