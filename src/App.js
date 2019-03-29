import React, { Component } from "react";
import Home from "./Components/Home";
import "./Components/css/main.css";
import Navbar from "./Components/Topbar";

class App extends Component {
  handlePathChange = path => {
    const firstPart = path.split("/")[1];
    switch (firstPart) {
      case "about":
        return <Home />;
      case "gallery":
        return <Home />;
      case "blog":
        return <Home />;
      case "":
        return <Home />;
      default:
        return <Home />;
    }
  };
  render() {
    return (
      <div className="App">
        <div id="content">
          <Navbar />
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
