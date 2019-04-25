import React from "react";
import firebase from "firebase";
import "../Components/css/main.css";
import "./css/gallery.css";

let database;
let ref;
let storage;
let returnedKey = "initial";
let numKeys;

class Gallery extends React.Component {
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

    // Create a storage variable for firebase
    storage = firebase.storage();

    ref = database.ref('users/');
    ref.on('value', function(snap) {
      let results = snap.val();
      let keys = Object.keys(results);
      numKeys = keys.length;
      console.log("Number of completed results: " + numKeys);
    });
  }

  addGalleryImage = (uid) => {
    let x = document.createElement("IMG");

    storage.ref('test/' + uid + ".png").getDownloadURL().then(function(fbURL) {
      let url = fbURL;

      x.setAttribute("src", url);
    });

    x.setAttribute("width", "304");

    x.setAttribute("height", "228");

    document.body.appendChild(x);
  };

  getUIDfromEasyID = (easyID) => {
    if(easyID !== null) {
      ref = database.ref('users');
      ref.on('value', function(data) {
        let results = data.val();
        let keys = Object.keys(results);
        numKeys = keys.length;
        if (easyID <= keys.length) {
          for (let i = 0; i < numKeys; i++) {
            ref = database.ref("users/" + keys[i]);
            ref
            .orderByChild("easyID")
            .equalTo(parseInt(easyID))
            .on("value", snap => {
              if (snap.val() !== null) {
                console.log("Grabbing UID " + ref.key + " for easyID: " + easyID);
                const val = snap.val();
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
    for(let i = 0; i < numKeys; i++) {
      this.getUIDfromEasyID((i+1).toString());
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
        <div className="submit" onClick={() => this.generateImagery()}>
          submit
        </div>
      </div>
    );
  }
}

export default Gallery;
