import React from "react";
import Home from "./components/Home";
import Button from "@material-ui/core/Button";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Home />
        <div>
          <Button
            variant='contained'
            color='primary'
            style={{ marginTop: "50px" }}
          >
            Click
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
