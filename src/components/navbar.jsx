import React, { Component } from "react";
import "../index.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="nav">
        <a href="http://localhost:3000/" className="nav-link">
          Navbar <span className="total">{this.props.totalCount}</span>
        </a>
      </nav>
    );
  }
}
