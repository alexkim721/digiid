import React from "react";
import "../Components/css/main.css";

class Generate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      easyID: ""
    };
  }
  handleChange(e) {
    this.setState({
      ...this.state,
      answers: e.target.name
    });
  }
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
            onChange={this.handleTextChange}
          />
          <div className="submit">submit</div>
        </div>
        <div className="generator">
          <div className="art" />
        </div>
      </div>
    );
  }
}

export default Generate;
