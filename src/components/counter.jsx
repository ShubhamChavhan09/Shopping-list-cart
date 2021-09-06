import "../index.css";
import React, { Component } from "react";

export default class Counter extends Component {
  render() {
    return (
      <div className="box">
        <span className={this.getClasses()}>{this.formatValue()}</span>
        <button
          className="btn"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
    );
  }
  getClasses = () => {
    let classes = "btn btn-";
    classes += this.props.counter.value === 0 ? "warning" : "blue";
    return classes;
  };
  formatValue = () => {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  };
}
