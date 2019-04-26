import React from "react";
import "../Components/css/main.css";
import "./css/gallery.css";
import axios from "axios";

// const apibase = "https://digital-identities.firebaseio.com/users.json";
class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [],
      imgKeys: [],
      imgurl: ""
    };
  }
  componentWillMount() {
    axios
      .get(`https://digital-identities.firebaseio.com/users.json`)
      .then(data => {
        this.setState({
          data: data.data,
          loading: false
        });
        this.setState({
          imgKeys: Object.keys(this.state.data)
        });
      });
  }

  getImgUrl = allkeys => {
    allkeys.map(singlekey => {
      this.props.strdata
        .ref(`test/${singlekey}`)
        .getDownloadURL()
        .then(url => {
          let x = document.createElement("IMG");
          let cont = document.createElement("DIV");
          x.setAttribute("src", url);
          cont.classList.add("item-cont");
          x.classList.add("item");
          document.querySelector(".items").appendChild(cont);
          cont.appendChild(x);
        })
        .catch(error => {});
    });
  };

  render() {
    return (
      <div className="gallery maincontent" id="gallery">
        <p className="header">gallery</p>
        <div className="items">
          {this.state.imgKeys && this.getImgUrl(this.state.imgKeys)
          // <img
          //   src={this.props.strdata
          //     .ref(`test/${this.state.imgKeys[0]}`)
          //     .getDownloadURL()
          //     .then(url => {
          //       console.log(url);
          //       return url;
          //     })
          //     .catch(error => {})}
          //   alt={this.state.imgKeys[0]}
          // />

          // this.props.strdata
          //   .ref(`test/${this.state.imgKeys[0]}.png`)
          //   .getDownloadURL()
          //   .then(img => {
          //     console.log(img);
          //   })
          }
        </div>
      </div>
    );
  }
}

export default Gallery;
