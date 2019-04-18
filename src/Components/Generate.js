import React from "react";
import firebase from "firebase";
import "../Components/css/main.css";

let database;
let ref;

class Generate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      easyID: "",
      answers: {}
    };
  }
  componentDidUpdate() {
    console.log(this.state);
  }
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

    // Create a database variable from firebase
    database = firebase.database();
  }

  getSurveyResults = data => {
    let results = data.val();
    let keys = Object.keys(results);
    for (let i = 0; i < keys.length; i++) {
      ref = database.ref("users/" + keys[i]);

      // CHANGE THE EQUALTO VALUE BELOW TO THE EASYID VARIABLE
      ref
        .orderByChild("easyID")
        .equalTo(parseInt(this.state.easyID))
        .on("value", snap => {
          if (snap.val() !== null) {
            console.log("Data retrieved from firebase:");
            const val = snap.val();

            for (const key in val) {
              this.setState({ answers: val[key].answers });
            }
          }
        });
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
    console.log("Submit button pushed");

    // Reference data from the database
    ref = database.ref("users");

    // Get data from the firebase
    ref.on("value", this.getSurveyResults, this.errData);
  };
  render() {
    return (
      <div className="generate maincontent" id="generate">
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
        <div className="generator">
          <div className="art" />
        </div>
      </div>
    );
  }
}

export default Generate;
