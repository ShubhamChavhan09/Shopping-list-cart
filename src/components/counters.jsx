import React, { Component } from "react";
import Counter from "./counter";

export default class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 3 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const count = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: count });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleReset} className="btn">
          Reset
        </button>
        {this.state.counters.map((c) => (
          <Counter
            key={c.id}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counter={c}
          />
        ))}
      </div>
    );
  }
}
