import React from "react";
import { hot } from "react-hot-loader";

class App extends React.Component {
  state = {
    counter: 0
  };

  render() {
    return (
      <div>
        <h1>Hello React, Sai Lao Kham</h1>
        <h2 className={this.state.counter > 5 ? "warning" : null}>
          Counter : {this.state.counter}
        </h2>
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          +
        </button>
        <button
          onClick={() => this.setState({ counter: this.state.counter - 1 })}
        >
          -
        </button>
      </div>
    );
  }
}

export default hot(module)(App);
