import "../index.css";
import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    value: this.props.value,
  };
  handleIncrement = () => {
    this.setState({
      value: this.state.value + 1,
    });
  };

  render() {
    return (
      <div className="container">
        <span className={this.getClasses()}>{this.formatValue()}</span>
        <button className="btn" onClick={this.handleIncrement}>
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
    );
  }
  getClasses = () => {
    let classes = "btn btn-";
    classes += this.state.value === 0 ? "warning" : "blue";
    return classes;
  };
  formatValue = () => {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  };
}
