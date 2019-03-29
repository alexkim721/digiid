import React from "react";
import "../Components/css/about.css";
import "../Components/css/main.css";

class About extends React.Component {
  render() {
    return (
      <div className="about maincontent" id="about">
        <p className="header">about</p>
        <div className="two-colm">
          <p>
            We believe curated feed on social media have promoted a culture of
            comparison and replication, resulting in a loss of true self
            expression.
          </p>
          <div className="img-container">
            <div className="img problem" />
          </div>
        </div>
        <div className="two-colm reverse">
          <p>
            We’re providing visitors with an oppurtunity to visualize their
            individuality by creating abstracted portraiture that is generated
            from their personal responses.
          </p>
          <div className="img-container">
            <div className="img survey" />
          </div>
        </div>
        <div className="two-colm">
          <p>
            By allowing visitors to create and interact with abstractions of who
            they are, we hope to aid in the development of new perceptions on
            topics related to individuality in the age of social media.
          </p>
          <div className="img-container">
            <div className="img concept" />
          </div>
        </div>
        <p className="header">meet the team</p>
        <div className="team">
          <div className="teamNode">
            <div className="picture" />
            <p className="name">Alexander Kim</p>
            <p className="title">Leader | Lead Developer</p>
          </div>
          <div className="teamNode">
            <div className="picture" />
            <p className="name">Shelby Mason</p>
            <p className="title">Lead Designer</p>
          </div>
          <div className="teamNode">
            <div className="picture" />
            <p className="name">Caren Flohr</p>
            <p className="title">Designer</p>
          </div>
          <div className="teamNode">
            <div className="picture" />
            <p className="name">Erika Kallio</p>
            <p className="title">Designer</p>
          </div>
          <div className="teamNode">
            <div className="picture" />
            <p className="name">Ian Loomis</p>
            <p className="title">Designer</p>
          </div>
          <div className="teamNode">
            <div className="picture" />
            <p className="name">Zach Burdett</p>
            <p className="title">Designer | Developer</p>
          </div>
          <div className="teamNode">
            <div className="picture" />
            <p className="name">Matthew Freeberg</p>
            <p className="title">Developer</p>
          </div>
          <div className="teamNode">
            <div className="picture" />
            <p className="name">Patrick Bell</p>
            <p className="title">Developer</p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
