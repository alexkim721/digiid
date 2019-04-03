import React, { Component } from "react";
import Home from "./Components/Home";
import "./Components/css/main.css";
import "./Components/css/mobile.css";
import Navbar from "./Components/Topbar";
import About from "./Components/About";
import Gallery from "./Components/Gallery";
import Blog from "./Components/Blog";
import Socialbar from "./Components/Socialbar";
import Mobilebar from "./Components/Mobilebar";
import Mobilefooter from "./Components/Mobilefooter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0, mobile: false, bartoggle: false };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    if (window.innerWidth <= 500) {
      this.setState({ mobile: true });
    } else {
      this.setState({ mobile: false });
    }
  }
  openMobile = () => {
    if (!this.state.bartoggle) {
      this.setState({ bartoggle: true });
      document.querySelector("#mobilebar").style.transform = "translateX(0)";
      document.querySelector("body").classList.add("hidebar");
    } else {
      document.querySelector("#mobilebar").style.transform =
        "translateX(100vw)";
      document.querySelector("body").classList.remove("hidebar");
      this.setState({ bartoggle: false });
    }
  };

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
          {this.state.width <= 500 && (
            <div className="mobiletoggle">
              <div className="hamburg">
                <div
                  className="hamLine"
                  onClick={() => {
                    this.openMobile();
                  }}
                />
              </div>
            </div>
          )}
          <Mobilebar openMobile={this.openMobile} />

          {this.state.width > 500 && <Navbar />}
          {this.handlePathChange(this.props.history.location.pathname)}
          {this.state.width <= 500 ? <Mobilefooter /> : <Socialbar />}
        </div>
      </div>
    );
  }
}

export default App;
