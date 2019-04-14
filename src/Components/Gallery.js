import React from "react";
import "../Components/css/main.css";
import "./css/gallery.css";

class Gallery extends React.Component {
  render() {
    return (
      <div className="gallery maincontent" id="gallery">
        <p className="header">gallery</p>
        <div className="placeholder">
          <p className="subheader soon">Content Coming Soon</p>
        </div>
        {/* <div className="items">
          <div className="item" />
          <div className="item" />
          <div className="item" />
          <div className="item" />
          <div className="item" />
          <div className="item" />
          <div className="item" />
          <div className="item" />
          <div className="item" />
          <div className="item" />
          <div className="item" />
          <div className="item" />
        </div> */}
      </div>
    );
  }
}

export default Gallery;
