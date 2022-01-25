import Cell from "./Cell";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { turn: false };
    this.changeTurn = this.changeTurn.bind(this);
  }

  changeTurn() {
    this.setState({ turn: !this.state.turn });
  }

  render() {
    return (
      <div
        id="grid"
        className="w-fit grid grid-cols-3 grid-rows-3 my-3 mx-auto gap-1 p-1"
        onClick={this.changeTurn}
      >
        <Cell xTurn={this.state.turn} />
        <Cell xTurn={this.state.turn} />
        <Cell xTurn={this.state.turn} />

        <Cell xTurn={this.state.turn} />
        <Cell xTurn={this.state.turn} />
        <Cell xTurn={this.state.turn} />

        <Cell xTurn={this.state.turn} />
        <Cell xTurn={this.state.turn} />
        <Cell xTurn={this.state.turn} />
      </div>
    );
  }
}

export default App;
