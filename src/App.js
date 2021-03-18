import React, { Component } from "react";

import "./App.css";

class Feedback extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  handleCkick = (e) => {
    // console.log("button: ", e.target.name);
    this.setState((prev) => ({ [e.target.name]: prev[e.target.name] + 1 }));

    // console.log("state ", this.state);
  };

  countTotalFeedback = (a, b, c) => {
    return a + b + c;
  };

  countPositiveFeedbackPercentage = (a, x) => {
    return (a / x) * 100;
  };

  render() {
    const {
      state,
      handleCkick,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;

    return (
      <>
        <section className="feedback">
          <h2 className="title">Please leave feedback</h2>

          <ul className="feedbackList">
            <li className="feedbackItem">
              <button className="feedbackBtn" name="good" onClick={handleCkick}>
                good
              </button>
            </li>
            <li className="feedbackItem">
              <button
                className="feedbackBtn"
                name="neutral"
                onClick={handleCkick}
              >
                neutral
              </button>
            </li>
            <li className="feedbackItem">
              <button className="feedbackBtn" name="bad" onClick={handleCkick}>
                bad
              </button>
            </li>
          </ul>
        </section>

        <section className="statistics">
          <h2 className="title">Statistics</h2>

          <ul className="statisticsList">
            <li className="statisticsItem">Good: {state.good}</li>
            <li className="statisticsItem">Neutral: {state.neutral}</li>
            <li className="statisticsItem">Bad: {state.bad}</li>
            <li className="statisticsItem">
              Total: {countTotalFeedback(state.good, state.neutral, state.bad)}
            </li>
            <li className="statisticsItem">
              Positive feedback:{" "}
              {Math.round(
                countPositiveFeedbackPercentage(
                  state.good,
                  countTotalFeedback(state.good, state.neutral, state.bad)
                )
              )}
              %
            </li>
          </ul>
        </section>
      </>
    );
  }
}

export default Feedback;
