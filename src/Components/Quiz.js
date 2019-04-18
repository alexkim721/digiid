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
        quest5: "",
        quest6: "",
        quest7: "2",
        quest8: "2",
        quest9: ""
      },
      pages: 0,
      pagesloaded: false,
      ctrlhidden: true,
      startDate: new Date(),
      answeredQs: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.setState({
      pages: document.querySelector(".pages").childElementCount
    });
    for (
      let i = 1;
      i < document.querySelector(".pages").childElementCount - 1;
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
    if (this.state.pagenum === this.state.pages - 2) {
      this.setState({ ctrlhidden: true, pagenum: this.state.pagenum + 1 });
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
  fiveScale = quest => {
    let style = {
      // transform: `translateX(calc(25% * ${this.state.answers.quest7}))`
      marginLeft: `calc((25% * ${this.state.answers[quest]}) + 7px)`
    };
    return style;
  };

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
                this.setState({ disablenext: true });
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
            <div className="content">
              <p className="subheader">Do you prefer Dogs or Cats?</p>
              <div className="options">
                <div
                  className={
                    this.state.answers.quest6 === "dogs"
                      ? "option active"
                      : "option"
                  }
                  id="dogs"
                  onClick={() => {
                    this.setState({
                      ...this.state,
                      answers: {
                        ...this.state.answers,
                        quest6: "dogs"
                      }
                    });
                  }}
                />
                <div
                  className={
                    this.state.answers.quest6 === "both"
                      ? "option active"
                      : "option"
                  }
                  id="both"
                  onClick={() => {
                    this.setState({
                      ...this.state,
                      answers: {
                        ...this.state.answers,
                        quest6: "both"
                      }
                    });
                  }}
                />
                <div
                  className={
                    this.state.answers.quest6 === "cats"
                      ? "option active"
                      : "option"
                  }
                  id="cats"
                  onClick={() => {
                    this.setState({
                      ...this.state,
                      answers: {
                        ...this.state.answers,
                        quest6: "cats"
                      }
                    });
                  }}
                />
                <div
                  className={
                    this.state.answers.quest6 === "neither"
                      ? "option active"
                      : "option"
                  }
                  id="neither"
                  onClick={() => {
                    this.setState({
                      ...this.state,
                      answers: {
                        ...this.state.answers,
                        quest6: "neither"
                      }
                    });
                  }}
                />
              </div>
            </div>
          </div>
          <div className="page page7">
            <div className="content">
              <p className="subheader">
                From a scale of 1 to 5, how messy or organized do you consider
                yourself?
              </p>
              <div className="options">
                <div className="scale">
                  <div
                    className="1 option"
                    onClick={() => {
                      this.setState({
                        ...this.state,
                        answers: {
                          ...this.state.answers,
                          quest7: 0
                        }
                      });
                    }}
                  />
                  <div
                    className="2 option"
                    onClick={() => {
                      this.setState({
                        ...this.state,
                        answers: {
                          ...this.state.answers,
                          quest7: 1
                        }
                      });
                    }}
                  />
                  <div
                    className="3 option"
                    onClick={() => {
                      this.setState({
                        ...this.state,
                        answers: {
                          ...this.state.answers,
                          quest7: 2
                        }
                      });
                    }}
                  />
                  <div
                    className="4 option"
                    onClick={() => {
                      this.setState({
                        ...this.state,
                        answers: {
                          ...this.state.answers,
                          quest7: 3
                        }
                      });
                    }}
                  />
                  <div
                    className="5 option"
                    onClick={() => {
                      this.setState({
                        ...this.state,
                        answers: {
                          ...this.state.answers,
                          quest7: 4
                        }
                      });
                    }}
                  />

                  <div className="line" />
                </div>

                <div className="circCont">
                  <div
                    className="selectedScale"
                    style={this.fiveScale("quest7")}
                  />
                </div>
                <div className="labels">
                  <div className="label">Messy</div>
                  <div className="label">Organized</div>
                </div>
              </div>
            </div>
          </div>
          <div className="page page8">
            <div className="content">
              <p className="subheader">
                From a scale of 1 to 5, how Introverted or Extroverted do you
                think you are?
              </p>
              <div className="options">
                <div className="scale">
                  <div
                    className="1 option"
                    onClick={() => {
                      this.setState({
                        ...this.state,
                        answers: {
                          ...this.state.answers,
                          quest8: 0
                        }
                      });
                    }}
                  />
                  <div
                    className="2 option"
                    onClick={() => {
                      this.setState({
                        ...this.state,
                        answers: {
                          ...this.state.answers,
                          quest8: 1
                        }
                      });
                    }}
                  />
                  <div
                    className="3 option"
                    onClick={() => {
                      this.setState({
                        ...this.state,
                        answers: {
                          ...this.state.answers,
                          quest8: 2
                        }
                      });
                    }}
                  />
                  <div
                    className="4 option"
                    onClick={() => {
                      this.setState({
                        ...this.state,
                        answers: {
                          ...this.state.answers,
                          quest8: 3
                        }
                      });
                    }}
                  />
                  <div
                    className="5 option"
                    onClick={() => {
                      this.setState({
                        ...this.state,
                        answers: {
                          ...this.state.answers,
                          quest8: 4
                        }
                      });
                    }}
                  />

                  <div className="line" />
                </div>

                <div className="circCont">
                  <div
                    className="selectedScale"
                    style={this.fiveScale("quest8")}
                  />
                </div>
                <div className="labels">
                  <div className="label">Introvert</div>
                  <div className="label">Extrovert</div>
                </div>
              </div>
            </div>
          </div>
          <div className="page page9">
            <div className="content">
              <p className="subheader">
                Do you consider yourself more Methodical or Spontaneous?
              </p>
              <div className="options">
                <div
                  className={
                    this.state.answers.quest9 === "methodical"
                      ? "option active"
                      : "option"
                  }
                  id="methodical"
                  onClick={() => {
                    this.setState({
                      ...this.state,
                      answers: {
                        ...this.state.answers,
                        quest9: "methodical"
                      }
                    });
                  }}
                />
                <div
                  className={
                    this.state.answers.quest9 === "spontaneous"
                      ? "option active"
                      : "option"
                  }
                  id="spontaneous"
                  onClick={() => {
                    this.setState({
                      ...this.state,
                      answers: {
                        ...this.state.answers,
                        quest9: "spontaneous"
                      }
                    });
                  }}
                />
              </div>
            </div>
          </div>
          <div className="page page10">
            <div className="content">
              <p className="subheader">Review your Answers</p>
              <div className="answers">
                <p className="answer">
                  Name:{" "}
                  {`${this.state.answers.quest1.nfirst} ${
                    this.state.answers.quest1.nlast
                  }`}
                </p>
                <p className="answer">
                  Birthday:{" "}
                  {`${this.state.answers.quest2
                    .split(" ")
                    .slice(1)
                    .join(" ")}`}
                </p>
                <p className="answer">
                  Would you rather live in the city, suburbs or country?:{" "}
                  {`${this.state.answers.quest3}`}
                </p>
                <p className="answer">
                  How does pinapple on pizza make you feel?:{" "}
                  {`${this.state.answers.quest4}`}
                </p>
                <p className="answer">
                  Are you a morning person or a night owl?:{" "}
                  {`${this.state.answers.quest5}`}
                </p>
                <p className="answer">
                  Do you prefer Dogs or Cats?: {`${this.state.answers.quest6}`}
                </p>
                <p className="answer">
                  From a scale of 1 to 5, how messy or organized do you consider
                  yourself? {`${this.state.answers.quest7}`}
                </p>
                <p className="answer">
                  From a scale of 1 to 5, how Introverted or Extroverted do you
                  think you are?: {`${this.state.answers.quest8}`}
                </p>
                <p className="answer">
                  Do you consider yourself more Methodical or Spontaneous?:{" "}
                  {`${this.state.answers.quest9}`}
                </p>
              </div>
              <div className="ctrls">
                <div
                  className="back ctrl"
                  onClick={() => {
                    this.prevPage();
                    this.setState({ ctrlhidden: false });
                  }}
                >
                  back
                </div>
                <div className="submit ctrl">submit</div>
              </div>
            </div>
          </div>
        </div>
        <div className={this.state.ctrlhidden ? "pagectrl hidden" : "pagectrl"}>
          <div
            className={
              this.state.pagenum <= 1 ? "prev ctrl inactive" : "prev ctrl"
            }
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
            <div
              className="curpg"
              style={this.state.pagenum < 10 ? this.curPg() : {}}
            />
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
