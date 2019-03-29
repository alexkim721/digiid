import React, { Component } from "react";
import Home from "./Components/Home";
import "./Components/css/main.css";
import Navbar from "./Components/Topbar";
import About from "./Components/About";
import Gallery from "./Components/Gallery";
import Blog from "./Components/Blog";
import Socialbar from "./Components/Socialbar";

class App extends Component {
  handlePathChange = path => {
    const firstPart = path.split("/")[1];
    switch (firstPart) {
      case "about":
        return <About />;
      case "gallery":
        return <Gallery />;
      case "blog":
        return <Blog />;
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
          <Socialbar />
          {this.handlePathChange(this.props.history.location.pathname)}
        </div>
      </div>
    );
  }
}

export default App;
