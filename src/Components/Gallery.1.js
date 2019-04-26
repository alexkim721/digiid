import React from "react";
import "../Components/css/main.css";
import "./css/gallery.css";

// let database;
// let storage;
let ref;
let returnedKey;
let numKeys;

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  componentWillMount() {
    console.log(this.props);
    // // Initialize Firebase
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

    // // Create a storage variable for firebase
    // storage = firebase.storage();

    ref = this.props.dbdata.ref("users/");
    ref.on("value", snap => {
      let results = snap.val();
      let keys = Object.keys(results);
      numKeys = keys.length;
      console.log("Number of completed results: " + numKeys);
      this.setState({
        loading: false
      });
    });
  }

  addGalleryImage = uid => {
    let cont = document.createElement("DIV");
    let x = document.createElement("IMG");

    this.props.strdata
      .ref("test/" + uid + ".png")
      .getDownloadURL()
      .then(function(fbURL) {
        let url = fbURL;

        x.setAttribute("src", url);
      });
    cont.classList.add("item-cont");
    x.classList.add("item");
    cont.appendChild(x);
    document.querySelector(".items").appendChild(cont);
  };

  getUIDfromEasyID = easyID => {
    if (easyID !== null) {
      ref = this.props.dbdata.ref("users");
      ref.on("value", data => {
        let results = data.val();
        let keys = Object.keys(results);
        numKeys = keys.length;
        if (easyID <= keys.length) {
          for (let i = 0; i < numKeys; i++) {
            ref = this.props.dbdata.ref("users/" + keys[i]);
            ref
              .orderByChild("easyID")
              .equalTo(parseInt(easyID))
              .on("value", snap => {
                if (snap.val() !== null) {
                  console.log(
                    "Grabbing UID " + ref.key + " for easyID: " + easyID
                  );
                  returnedKey = ref.key;
                }
              });
          }
        }
      });
    }
  };

  errData = err => {
    console.log("Error!");
    console.log(err);
  };

  generateImagery = () => {
    console.log("called");
    for (let i = 0; i < numKeys; i++) {
      this.getUIDfromEasyID((i + 1).toString());
      setTimeout(() => {
        console.log(`returnedKey ${returnedKey} set`);
        this.addGalleryImage(returnedKey);
      }, 1000);
    }
  };

  render() {
    return (
      <div className="gallery maincontent" id="gallery">
        <p className="header">gallery</p>
        <div className="items">
          {!this.state.loading && this.generateImagery()}
        </div>
      </div>
    );
  }
}

export default Gallery;
