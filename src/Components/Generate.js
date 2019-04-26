import React from "react";
import "../Components/css/main.css";
import P5Wrapper from "react-p5-wrapper";
import sketch from "./p5.js";
import { getAnswers } from "./p5.js";

let ref;

class Generate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      easyID: "",
      answers: {},
      generated: false,
      canSubmit: false
    };
  }
  componentWillMount() {
    // Initialize Firebase
    // let config = {
    //   apiKey: "AIzaSyCLCtrfymafzgxNQCJpUVSEnmWiZAgbP84",
    //   authDomain: "digital-identities.firebaseapp.com",
    //   databaseURL: "https://digital-identities.firebaseio.com",
    //   projectId: "digital-identities",
    //   storageBucket: "digital-identities.appspot.com",
    //   messagingSenderId: "834438338603"
    // };
    // firebase.initializeApp(config);
    // // Create a database variable from firebase
    // database = firebase.database();
  }

  getSurveyResults = data => {
    let results = data.val();
    let keys = Object.keys(results);
    if (this.state.easyID <= keys.length) {
      for (let i = 0; i < keys.length; i++) {
        ref = this.props.dbdata.ref("users/" + keys[i]);
        ref
          .orderByChild("easyID")
          .equalTo(parseInt(this.state.easyID))
          .on("value", snap => {
            if (snap.val() !== null) {
              console.log("Grabbing data for easyID: " + this.state.easyID);
              const val = snap.val();
              for (const key in val) {
                this.setState({ answers: val[key].answers, canSubmit: true });
                getAnswers(val[key].answers);
              }
            }
          });
      }
    } else {
      console.log("Error: submitted ID is invalid.");
    }
  };

  // Throw an error if data can't be gotten
  errData = err => {
    console.log("Error!");
    console.log(err);
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      easyID: e.target.value
    });
  };
  submitID = () => {
    // Reference data from the database
    ref = this.props.dbdata.ref("users");

    // Get data from the firebase
    ref.on("value", this.getSurveyResults, this.errData);
  };
  render() {
    return (
      <div className="generate" id="generate">
        {!this.state.canSubmit ? (
          <div className="text">
            <p className="subheader">Welcome to the Generator!</p>
            <p className="enter">Please enter your ID below.</p>
            <input
              type="text"
              name="easyID"
              placeholder="User ID"
              onChange={this.handleChange}
            />
            <div className="submit" onClick={() => this.submitID()}>
              submit
            </div>
          </div>
        ) : (
          <div className="generator">
            <div className="art">
              <P5Wrapper sketch={sketch} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Generate;
