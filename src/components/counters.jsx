import React, { Component } from "react";
import Counter from "./counter";

export default class Counters extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onReset} className="btn btn-blue">
          Reset
        </button>
        {this.props.counters.map((c) => (
          <Counter
            key={c.id}
            onIncrement={this.props.onIncrement}
            onDelete={this.props.onDelete}
            counter={c}
          />
        ))}
      </div>
    );
  }
}
