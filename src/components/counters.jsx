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

  handleDelete = (counterId) => {
    const count = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: count });
  };
  render() {
    return (
      <div>
        {this.state.counters.map((c) => (
          <Counter key={c.id} onDelete={this.handleDelete} counters={c} />
        ))}
      </div>
    );
  }
}
