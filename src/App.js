import React, { Component } from "react";
import Home from "./Components/Home";
import "./Components/css/main.css";
import "./Components/css/mobile.css";
import Navbar from "./Components/Topbar";
import About from "./Components/About";
import Gallery from "./Components/Gallery";
import Blog from "./Components/Blog";
import Quiz from "./Components/Quiz";
import Socialbar from "./Components/Socialbar";
import Mobilebar from "./Components/Mobilebar";
import Mobilefooter from "./Components/Mobilefooter";
import logo from "./images/logo.png";
import Generate from "./Components/Generate";
import posed from "react-pose";
import firebase from "firebase";

const Circ1 = posed.div({
  hidden: {
    x: -250,
    y: -150,
    transition: { duration: 500 }
  },
  visible: {
    x: -20,
    y: -20,
    transition: { type: "spring", duration: 500, damping: 10, stiffness: 150 }
  }
});
const Squ1 = posed.div({
  hidden: {
    x: 160,
    y: -150,
    rotate: 25,
    transition: { duration: 500 }
  },
  visible: {
    x: 160,
    y: 80,
    rotate: -25,
    transition: { type: "spring", duration: 500, damping: 10, stiffness: 150 }
  }
});
const Tri1 = posed.div({
  hidden: {
    x: 350,
    y: -150,
    rotate: 0,
    transition: { duration: 500 }
  },
  visible: {
    x: 50,
    y: -100,
    rotate: -25,
    transition: { type: "spring", duration: 500, damping: 10, stiffness: 150 }
  }
});
const Tri2 = posed.div({
  hidden: {
    x: -350,
    y: 200,
    rotate: 65,
    transition: { duration: 500 }
  },
  visible: {
    x: -50,
    y: 100,
    rotate: 95,
    transition: { type: "spring", duration: 500, damping: 10, stiffness: 150 }
  }
});
const Squ2 = posed.div({
  hidden: {
    x: 200,
    y: 250,
    rotate: -10,
    transition: { duration: 500 }
  },
  visible: {
    x: 0,
    y: 80,
    rotate: 10,
    transition: { type: "spring", duration: 500, damping: 10, stiffness: 150 }
  }
});
const Circ2 = posed.div({
  hidden: {
    x: 150,
    y: -300,
    transition: { duration: 500 }
  },
  visible: {
    x: -170,
    y: -60,
    transition: { type: "spring", duration: 500, damping: 10, stiffness: 150 }
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      mobile: false,
      bartoggle: false,
      quizBG: true,
      database: "",
      storage: ""
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  getPage = show => {
    if (show) {
      this.setState({ quizBG: true });
    } else {
      this.setState({ quizBG: false });
    }
  };
  componentWillMount() {
    // Initialize Firebase
    let config = {
      apiKey: "AIzaSyCLCtrfymafzgxNQCJpUVSEnmWiZAgbP84",
      authDomain: "digital-identities.firebaseapp.com",
      databaseURL: "https://digital-identities.firebaseio.com",
      projectId: "digital-identities",
      storageBucket: "digital-identities.appspot.com",
      messagingSenderId: "834438338603"
    };

    firebase.initializeApp(config);

    // // Create a database variable from firebase
    // let database = firebase.database();

    // // Create a storage variable for firebase
    // let storage = firebase.storage();

    this.setState({
      database: firebase.database(),
      storage: firebase.storage()
    });
  }
  componentDidUpdate() {}
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    window.addEventListener("mousemove", this.parallax);
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
  parallax = e => {
    document.querySelector(
      ".floatingbg"
    ).style.transform = `translate(${e.clientX / 90}px,${e.clientY / 90}px`;
  };
  openMobile = () => {
    if (!this.state.bartoggle) {
      this.setState({ bartoggle: true });
      document.querySelector("#mobilebar").style.transform =
        "translateX(-100vw)";
      document.querySelector("body").classList.add("hidebar");
    } else {
      document.querySelector("#mobilebar").style.transform = "translateX(0)";
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
        return (
          <Gallery dbdata={this.state.database} strdata={this.state.storage} />
        );
      case "blog":
        return <Blog />;
      case "quiz":
        return <Quiz getPage={this.getPage} dbdata={this.state.database} />;
      case "generate":
        return <Generate dbdata={this.state.database} getPage={this.getPage} />;
      case "":
        return <Home />;
      default:
        return <Home />;
    }
  };

  content = () => {
    if (
      this.props.history.location.pathname.split("/")[1] === "quiz" ||
      this.props.history.location.pathname.split("/")[1] === "generate"
    ) {
      return "inquiz";
    }
    // else if (
    //   this.props.history.location.pathname.split("/")[1] === "gallery"
    // ) {
    //   return "nocontent";
    // }
    else {
      return "";
    }
  };

  render() {
    return (
      <div className="App">
        {this.props.history.location.pathname.split("/")[1] === "quiz" ||
          (this.props.history.location.pathname.split("/")[1] ===
            "generate" && (
            <div className="bg">
              <Circ1
                className="elm1"
                pose={this.state.quizBG ? "visible" : "hidden"}
              />
              <Squ1
                className="elm2"
                pose={this.state.quizBG ? "visible" : "hidden"}
              />
              <Tri1
                className="elm3"
                pose={this.state.quizBG ? "visible" : "hidden"}
              />
              <Tri2
                className="elm4"
                pose={this.state.quizBG ? "visible" : "hidden"}
              />
              <Squ2
                className="elm5"
                pose={this.state.quizBG ? "visible" : "hidden"}
              />
              <Circ2
                className="elm6"
                pose={this.state.quizBG ? "visible" : "hidden"}
              />
            </div>
          ))}

        <div
          id="content"
          className={
            this.content()
            // this.props.history.location.pathname.split("/")[1] === "quiz"
            //   ? "inquiz"
            //   : ""
          }
        >
          {this.state.width <= 500 && (
            <div className="mobiletoggle">
              <div
                className={this.state.bartoggle ? "hamburg active" : "hamburg"}
              >
                <div
                  className="hamLine"
                  onClick={() => {
                    this.openMobile();
                  }}
                >
                  <div className="line first" />
                  <div className="line" />
                </div>
              </div>
            </div>
          )}
          <Mobilebar openMobile={this.openMobile} />

          {this.state.width > 500 && <Navbar />}
          {this.handlePathChange(this.props.history.location.pathname)}
          {this.state.width <= 500 ? <Mobilefooter /> : <Socialbar />}
        </div>
        <img
          src={logo}
          alt="logo"
          className={
            this.state.width > 1050 &&
            this.props.history.location.pathname.split("/")[1] === "" &&
            this.props.history.location.pathname.split("/")[1] === "home"
              ? "floatingbg"
              : "floatingbg hidden"
          }
        />
        {/* {this.state.width > 1050 &&
          this.props.history.location.pathname.split("/")[1] === "" && (
            <img src={logo} alt="logo" className="floatingbg" />
          )} */}
      </div>
    );
  }
}

export default App;
