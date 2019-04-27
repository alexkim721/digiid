import React from "react";
import "../Components/css/main.css";

class Info extends React.Component {
  render() {
    return (
      <div className="info maincontent" id="info">
        <img
          src={require("../images/infopage.png")}
          className="info-img"
          alt="Infographic"
        />
      </div>
    );
  }
}

export default Info;
