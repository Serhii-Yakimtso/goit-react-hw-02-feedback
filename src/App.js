import React, { Component } from "react";

import "./App.css";

class Feedback extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  handleCkick = (e) => {
    // console.log("button: ", e.target.name);
    this.setState((prev) => ({ [e.target.name]: prev[e.target.name] + 1 }));
    // console.log("state ", this.state);
  };

  render() {
    const { state, handleCkick } = this;

    // console.log("state ", state);
    // console.log("state.good ", state.good);
    // console.log("state.neutral ", state.neutral);
    // console.log("state.bad ", state.bad);

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
          </ul>
        </section>
      </>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
// <h2 className="title">Please leave feedback</h2>

// <ul className="feedbackList">
//   <li className="feedbackItem">
//     <button className="feedbackBtn">good</button>
//   </li>
//   <li className="feedbackItem">
//     <button className="feedbackBtn">neutral</button>
//   </li>
//   <li className="feedbackItem">
//     <button className="feedbackBtn">bad</button>
//   </li>
// </ul>

// <h2 className="title">Statistics</h2>

// <ul className="statisticsList">
//   <li className="statisticsItem">good</li>
//   <li className="statisticsItem">neutral</li>
//   <li className="statisticsItem">bad</li>
//   <class></class>
// </ul>
//     </div>
//   );
// }

// export default App;
export default Feedback;
