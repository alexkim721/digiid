import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "../Components/css/quiz.css";

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pagenum: 0,
      answers: {
        quest1: {
          nfirst: "",
          nlast: ""
        },
        quest2: "",
        quest3: "",
        quest4: "",
        quest5: ""
      },
      pages: 0,
      pagesloaded: false,
      ctrlhidden: true,
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.setState({
      pages: document.querySelector(".pages").childElementCount
    });
    for (
      let i = 1;
      i < document.querySelector(".pages").childElementCount;
      i++
    ) {
      let div = document.createElement("div");
      div.classList.add(`circ${i}`, "circle");
      div.onclick = () => {
        this.setState({ pagenum: i });
      };
      document.querySelector(".pgnum").appendChild(div);
    }
  }
  componentDidUpdate() {
    document.querySelector(".pages").style.marginLeft = `calc(-100% * ${
      this.state.pagenum
    })`;
    console.log(this.state);
  }
  nextPage = () => {
    if (this.state.pagenum === this.state.pages - 1) {
      this.setState({
        pagenum: 1
      });
    } else {
      this.setState({
        pagenum: this.state.pagenum + 1
      });
    }
    if (this.state.ctrlhidden && this.state.pagenum === 0) {
      this.setState({ ctrlhidden: false });
    }
  };
  prevPage = () => {
    if (this.state.pagenum === 1) {
      this.setState({
        pagenum: this.state.pages - 1
      });
    } else {
      this.setState({
        pagenum: this.state.pagenum - 1
      });
    }
  };
  curPg = () => {
    let pgpos = {
      marginLeft: `${30 * (this.state.pagenum - 1) + 11}px`
    };
    return pgpos;
  };
  handleTextChange = e => {
    this.setState({
      ...this.state,
      answers: {
        ...this.state.answers,
        quest1: {
          ...this.state.answers.quest1,
          [e.target.name]: e.target.value
        }
      }
    });
  };
  handleChange(date) {
    this.setState({
      ...this.state,
      answers: {
        ...this.state.answers,
        quest2: date.toDateString()
      },
      startDate: date
    });
  }

  render() {
    return (
      <div className="quiz" id="quiz">
        <div className="pages">
          <div className="page page0">
            <p className="header">digital identities</p>
            <p className="subheader">visualizing individuality</p>
            <div
              className="start"
              onClick={() => {
                this.nextPage();
              }}
            >
              start
            </div>
          </div>
          <div className="page page1">
            <div className="content">
              <p className="subheader">What is your name?</p>
              <div className="inputs">
                <input
                  type="text"
                  name="nfirst"
                  placeholder="first name"
                  onChange={this.handleTextChange}
                />
                <input
                  type="text"
                  name="nlast"
                  placeholder="last name"
                  onChange={this.handleTextChange}
                />
              </div>
            </div>
          </div>
          <div className="page page2">
            <div className="content">
              <p className="subheader">When is your birthday?</p>
              {/* <div className="inputs">
                <input type="text" name="bmonth" placeholder="month" />
                <input type="text" name="bday" placeholder="day" />
                <input type="text" name="byear" placeholder="year" />
              </div> */}
              <div className="calendar">
                <DatePicker
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                  placeholderText="Click to select a date"
                />
              </div>
            </div>
          </div>
          <div className="page page3">
            <div className="content">
              <p className="subheader">
                Would you rather live in the city, suburbs or country?
              </p>
              <div className="options">
                <div
                  className={
                    this.state.answers.quest3 === "city"
                      ? "option active"
                      : "option"
                  }
                  id="city"
                  onClick={() => {
                    this.setState({
                      ...this.state,
                      answers: {
                        ...this.state.answers,
                        quest3: "city"
                      }
                    });
                  }}
                />
                <div
                  className={
                    this.state.answers.quest3 === "suburbs"
                      ? "option active"
                      : "option"
                  }
                  id="suburbs"
                  onClick={() => {
                    this.setState({
                      ...this.state,
                      answers: {
                        ...this.state.answers,
                        quest3: "suburbs"
                      }
                    });
                  }}
                />
                <div
                  className={
                    this.state.answers.quest3 === "country"
                      ? "option active"
                      : "option"
                  }
                  id="country"
                  onClick={() => {
                    this.setState({
                      ...this.state,
                      answers: {
                        ...this.state.answers,
                        quest3: "country"
                      }
                    });
                  }}
                />
              </div>
            </div>
          </div>
          <div className="page page4">
            <div className="content">
              <p className="subheader">
                How does pinapple on pizza make you feel?
              </p>
              <div className="two-colm">
                <div className="img" />
                <div className="choices">
                  <div
                    className="option"
                    onClick={() => {
                      this.setState({
                        ...this.state,
                        answers: {
                          ...this.state.answers,
                          quest4: "Disgust"
                        }
                      });
                    }}
                  >
                    <span className="circle">
                      <span
                        className={
                          this.state.answers.quest4 === "Disgust"
                            ? "select selected"
                            : "select"
                        }
                      />
                    </span>
                    Disgust
                  </div>
                  <div
                    className="option"
                    onClick={() => {
                      this.setState({
                        ...this.state,
                        answers: {
                          ...this.state.answers,
                          quest4: "Disagreement"
                        }
                      });
                    }}
                  >
                    <span className="circle">
                      <span
                        className={
                          this.state.answers.quest4 === "Disagreement"
                            ? "select selected"
                            : "select"
                        }
                      />
                    </span>
                    Disagreement
                  </div>
                  <div
                    className="option"
                    onClick={() => {
                      this.setState({
                        ...this.state,
                        answers: {
                          ...this.state.answers,
                          quest4: "Discomfort"
                        }
                      });
                    }}
                  >
                    <span className="circle">
                      <span
                        className={
                          this.state.answers.quest4 === "Discomfort"
                            ? "select selected"
                            : "select"
                        }
                      />
                    </span>
                    Discomfort
                  </div>
                  <div
                    className="option"
                    onClick={() => {
                      this.setState({
                        ...this.state,
                        answers: {
                          ...this.state.answers,
                          quest4: "Indifference"
                        }
                      });
                    }}
                  >
                    <span className="circle">
                      <span
                        className={
                          this.state.answers.quest4 === "Indifference"
                            ? "select selected"
                            : "select"
                        }
                      />
                    </span>
                    Indifference
                  </div>
                  <div
                    className="option"
                    onClick={() => {
                      this.setState({
                        ...this.state,
                        answers: {
                          ...this.state.answers,
                          quest4: "Elated"
                        }
                      });
                    }}
                  >
                    <span className="circle">
                      <span
                        className={
                          this.state.answers.quest4 === "Elated"
                            ? "select selected"
                            : "select"
                        }
                      />
                    </span>
                    Elated
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="page page5">
            <div className="content">
              <p className="subheader">
                Are you a morning person or a night owl?
              </p>
              <div className="options">
                <div
                  className={
                    this.state.answers.quest5 === "morning"
                      ? "option active"
                      : "option"
                  }
                  id="morning"
                  onClick={() => {
                    this.setState({
                      ...this.state,
                      answers: {
                        ...this.state.answers,
                        quest5: "morning"
                      }
                    });
                  }}
                />
                <div
                  className={
                    this.state.answers.quest5 === "both"
                      ? "option active"
                      : "option"
                  }
                  id="both"
                  onClick={() => {
                    this.setState({
                      ...this.state,
                      answers: {
                        ...this.state.answers,
                        quest5: "both"
                      }
                    });
                  }}
                />
                <div
                  className={
                    this.state.answers.quest5 === "night"
                      ? "option active"
                      : "option"
                  }
                  id="night"
                  onClick={() => {
                    this.setState({
                      ...this.state,
                      answers: {
                        ...this.state.answers,
                        quest5: "night"
                      }
                    });
                  }}
                />
              </div>
            </div>
          </div>
          <div className="page page6">
            <p>this is page 6</p>
          </div>
          <div className="page page7">
            <p>this is page 7</p>
          </div>
          <div className="page page8">
            <p>this is page 8</p>
          </div>
          <div className="page page9">
            <p>this is page 9</p>
          </div>
        </div>
        <div className={this.state.ctrlhidden ? "pagectrl hidden" : "pagectrl"}>
          <div
            className="prev ctrl"
            onClick={() => {
              this.prevPage();
            }}
          >
            <p>prev</p>
          </div>
          {/* <div className="pgnum">
            <p>
              <span>{this.state.pagenum}</span>/
              <span>{this.state.pages - 1}</span>
            </p>
          </div> */}
          <div className="pgnum">
            <div className="curpg" style={this.curPg()} />
          </div>
          <div
            className="next ctrl"
            onClick={() => {
              this.nextPage();
            }}
          >
            <p>next</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Quiz;
