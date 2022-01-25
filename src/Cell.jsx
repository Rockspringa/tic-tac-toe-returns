import "./Cell.css";
import React from "react";

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = { occupiedBy: "blank" };
    this.occupyCell = this.occupyCell.bind(this);
  }

  occupyCell(e) {
    if (this.state.occupiedBy === "blank")
      this.setState({ occupiedBy: this.props.xTurn ? "x" : "o" });
  }

  render() {
    return (
      <div
        className={`w-40 h-40 ${this.state.occupiedBy}`}
        onClick={this.occupyCell}
      />
    );
  }
}

export default Cell;
