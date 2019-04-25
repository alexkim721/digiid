import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../Components/css/quiz.css";
import firebase from "firebase";

let database;
let ref;
let easyIDvar;

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
      answeredQs: 0,
      easyID: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
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

    // Reference data from the database
    ref = database.ref("users");

    // Grab the data from the database
    ref.on("value", this.assignEasyID, this.errData);

    firebase
      .auth()
      .signInAnonymously()
      .then(() => {
        console.log(
          "User " +
            firebase.auth().currentUser.uid +
            " signed in with an easyID of " +
            easyIDvar
        );
      });
  }
  componentDidMount() {
    this.setState({
      pages: document.querySelector(".pages").childElementCount
    });
    // for (
    //   let i = 1;
    //   i < document.querySelector(".pages").childElementCount - 2;
    //   i++
    // ) {
    //   let div = document.createElement("div");
    //   div.classList.add(`circ${i}`, "circle");
    //   div.onclick = () => {
    //     this.setState({ pagenum: i });
    //   };
    //   document.querySelector(".pgnum").appendChild(div);
    // }
    let div = document.createElement("div");
    div.classList.add(`bar`, "circle");
    document.querySelector(
      ".pgnum"
    ).style.width = `calc(30px * ${document.querySelector(".pages")
      .childElementCount - 3})`;
    document.querySelector(".pgnum").appendChild(div);
  }
  // Sends data to firebase
  submitData = () => {
    let data = {
      easyID: easyIDvar,
      answers: this.state.answers
    };
    this.setState({ easyID: easyIDvar });

    // See what's being sent
    console.log("Following data is being sent to the database:");
    console.log(data);

    // Create a reference to the database
    ref = database.ref("users/" + firebase.auth().currentUser.uid);

    // Push the data to the database
    ref.push(data);

    // Confirm send
    console.log("Data sent.");
  };

  assignEasyID = data => {
    let results = data.val();
    let keys = Object.keys(results);
    easyIDvar = keys.length;
  };

  // Throw an error if data can't be gotten
  errData = err => {
    console.log("Error!");
    console.log(err);
  };
  componentDidUpdate() {
    document.querySelector(".pages").style.marginLeft = `calc(-100% * ${
      this.state.pagenum
    })`;
    console.log(this.state);
    if (
      this.state.answers.quest1.nfirst !== "" &&
      this.state.answers.quest1.nlast !== ""
    ) {
      document.querySelector(".page1 .next").classList.add("active");
    }

    if (this.state.answers.quest2 !== "") {
      document.querySelector(".page2 .next").classList.add("active");
    }
  }
  nextPage = () => {
    if (this.state.ctrlhidden && this.state.pagenum === 0) {
      this.setState({ ctrlhidden: false });
    }
    if (this.state.pagenum === 1) {
      console.log("on page 1");
      if (
        this.state.answers.quest1.nfirst !== "" &&
        this.state.answers.quest1.nlast !== ""
      ) {
        this.setState({ pagenum: this.state.pagenum + 1 });
      }
    } else if (this.state.pagenum === 2) {
      if (this.state.answers.quest2 !== "") {
        this.setState({ pagenum: this.state.pagenum + 1 });
      }
    } else {
      if (this.state.pagenum === this.state.pages - 3) {
        this.setState({ ctrlhidden: true, pagenum: this.state.pagenum + 1 });
      } else {
        this.setState({
          pagenum: this.state.pagenum + 1
        });
      }
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
      width: `${30 * (this.state.pagenum - 1) + 6}px`
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
              <div className="nextCont">
                <div
                  className="next"
                  onClick={() => {
                    this.nextPage();
                  }}
                >
                  next
                </div>
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
              <div className="nextCont">
                <div
                  className="next"
                  onClick={() => {
                    this.nextPage();
                  }}
                >
                  next
                </div>
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
                    this.nextPage();
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
                    this.nextPage();
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
                    this.nextPage();
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
                      this.nextPage();
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
                      this.nextPage();
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
                      this.nextPage();
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
                      this.nextPage();
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
                      this.nextPage();
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
                    this.nextPage();
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
                    this.nextPage();
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
                    this.nextPage();
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
                    this.nextPage();
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
                    this.nextPage();
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
                    this.nextPage();
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
                    this.nextPage();
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
                      this.nextPage();
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
                      this.nextPage();
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
                      this.nextPage();
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
                      this.nextPage();
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
                      this.nextPage();
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
                      this.nextPage();
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
                      this.nextPage();
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
                      this.nextPage();
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
                      this.nextPage();
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
                      this.nextPage();
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
                    this.nextPage();
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
                    this.nextPage();
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
                  <span className="resp">
                    {`${this.state.answers.quest1.nfirst} ${
                      this.state.answers.quest1.nlast
                    }`}
                  </span>
                </p>
                <p className="answer">
                  Birthday:{" "}
                  <span className="resp">
                    {`${this.state.answers.quest2
                      .split(" ")
                      .slice(1)
                      .join(" ")}`}
                  </span>
                </p>
                <p className="answer">
                  Would you rather live in the city, suburbs or country?:{" "}
                  <span className="resp">{`${this.state.answers.quest3}`}</span>
                </p>
                <p className="answer">
                  How does pinapple on pizza make you feel?:{" "}
                  <span className="resp">{`${this.state.answers.quest4}`}</span>
                </p>
                <p className="answer">
                  Are you a morning person or a night owl?:{" "}
                  <span className="resp">{`${this.state.answers.quest5}`}</span>
                </p>
                <p className="answer">
                  Do you prefer Dogs or Cats?:{" "}
                  <span className="resp">{`${this.state.answers.quest6}`}</span>
                </p>
                <p className="answer">
                  From a scale of 1 to 5, how messy or organized do you consider
                  yourself?{" "}
                  <span className="resp">{`${this.state.answers.quest7 +
                    1}`}</span>
                </p>
                <p className="answer">
                  From a scale of 1 to 5, how Introverted or Extroverted do you
                  think you are?:{" "}
                  <span className="resp">{`${this.state.answers.quest8 +
                    1}`}</span>
                </p>
                <p className="answer">
                  Do you consider yourself more Methodical or Spontaneous?:{" "}
                  <span className="resp">{`${this.state.answers.quest9}`}</span>
                </p>
              </div>
              <div className="ctrls">
                {/* <div
                  className="back ctrl"
                  onClick={() => {
                    this.prevPage();
                    this.setState({ ctrlhidden: false });
                  }}
                >
                  back
                </div> */}
                <div
                  className={
                    this.state.answers.quest1.fname === "" ||
                    this.state.answers.quest1.lname === "" ||
                    this.state.answers.quest2 === "" ||
                    this.state.answers.quest3 === "" ||
                    this.state.answers.quest4 === "" ||
                    this.state.answers.quest5 === "" ||
                    this.state.answers.quest6 === "" ||
                    this.state.answers.quest7 === "" ||
                    this.state.answers.quest8 === "" ||
                    this.state.answers.quest9 === ""
                      ? "submit ctrl inactive"
                      : "submit ctrl"
                  }
                  onClick={() => {
                    if (
                      this.state.answers.quest1.fname === "" ||
                      this.state.answers.quest1.lname === "" ||
                      this.state.answers.quest2 === "" ||
                      this.state.answers.quest3 === "" ||
                      this.state.answers.quest4 === "" ||
                      this.state.answers.quest5 === "" ||
                      this.state.answers.quest6 === "" ||
                      this.state.answers.quest7 === "" ||
                      this.state.answers.quest8 === "" ||
                      this.state.answers.quest9 === ""
                    ) {
                      console.log("cannot submit");
                    } else {
                      // Log user out of firebase
                      firebase.auth().signOut();
                      console.log(
                        "User " +
                          firebase.auth().currentUser.uid +
                          " has logged out."
                      );
                      this.submitData();
                      this.setState({ pagenum: this.state.pagenum + 1 });
                    }
                  }}
                >
                  submit
                </div>
              </div>
            </div>
          </div>
          <div className="page page11">
            <div className="content">
              <p className="subheader">
                Your unique ID is{" "}
                <span className="colored">{this.state.easyID}</span>!
              </p>
              <p>
                Please be sure to remember your ID so we can quickly pull up
                your responses.
              </p>
              <p className="bye">Thank you for visiting digital identities!</p>
            </div>
          </div>
        </div>
        <div className={this.state.ctrlhidden ? "pagectrl hidden" : "pagectrl"}>
          {/* <div
            className={
              this.state.pagenum <= 1 ? "prev ctrl inactive" : "prev ctrl"
            }
            onClick={() => {
              this.prevPage();
            }}
          >
            <p>prev</p>
          </div> */}
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
          {/* <div
            className="next ctrl"
            onClick={() => {
              this.nextPage();
            }}
          >
            <p>next</p>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Quiz;
