import React from "react";
import "../Components/css/main.css";
import { NavLink } from "react-router-dom";

class Mobilebar extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div className="mobilebar" id="mobilebar">
        <div className="content">
          <div className="navitem">
            <NavLink
              to=""
              activeClassName="selectedlink"
              onClick={this.props.openMobile}
            >
              home
            </NavLink>
          </div>
          <div className="navitem">
            <NavLink
              to="/about"
              activeClassName="selectedlink"
              onClick={this.props.openMobile}
            >
              about
            </NavLink>
          </div>
          <div className="navitem">
            <NavLink
              to="/gallery"
              activeClassName="selectedlink"
              onClick={this.props.openMobile}
            >
              gallery
            </NavLink>
          </div>
          <div className="navitem">
            <NavLink
              to="/blog"
              activeClassName="selectedlink"
              onClick={this.props.openMobile}
            >
              blog
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Mobilebar;
