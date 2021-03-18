import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  handleClick = () => {
    this.setState({
      counter: ++this.state.counter,
    });
  };

  decrementClick = () => {
    if (this.state.counter > 0) {
      this.setState({
        counter: --this.state.counter,
      });
    }
  };

  resetCounter = () => {
    this.setState({
      counter: 0,
    });
  };

  render() {
    const { counter } = this.state;
    return (
      <div>
        <div>{counter}</div>
        <button onClick={this.handleClick}> +</button>
        <button onClick={this.decrementClick}> -</button>
        <button onClick={this.resetCounter}> Обнулить</button>
      </div>
    );
  }
}

export default App;
