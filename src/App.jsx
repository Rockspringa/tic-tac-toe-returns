import Cell from "./Cell";
import Banner from "./Banner";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cells: Array(9).fill(null), areWinner: false };
    this.selectCell = this.selectCell.bind(this);
    this.turnOfCross = false;
    this.winnerCells = [
      [0, 4, 8],
      [2, 4, 6],
      [0, 1, 2],
      [6, 7, 8],
      [0, 3, 6],
      [3, 4, 5],
      [2, 5, 8],
      [1, 4, 7],
    ];
  }

  selectCell(index) {
    if (this.state.cells[index]) return alert("La casilla ya esta ocupada.");
    if (this.state.areWinner) return alert("Ya hay un ganador, empiece otro juego.")
    this.turnOfCross = !this.turnOfCross;
    this.setState((prevState) => {
      prevState.cells[index] = !this.turnOfCross ? "cross" : "zero";
      return { cells: [...prevState.cells] };
    });
  }

  componentDidUpdate() {
    if (this.state.cells.reduce((prev, cur) => prev + (cur ? 1 : 0)) < 5 || this.areWinner)
      return;

    const tmpCells = this.state.cells;
    for (let cells of this.winnerCells) {
      if (
        tmpCells[cells[0]] &&
        tmpCells[cells[0]] == tmpCells[cells[1]] &&
        tmpCells[cells[0]] == tmpCells[cells[2]]
      ) {
        for (let i = 0; i < 3; i++)
          tmpCells[cells[i]] = `${tmpCells[cells[0]]} winner`;
        this.setState({ cells: tmpCells, areWinner: true });
        break;
      }
    }
  }

  render() {
    let banner = (
      <Banner
        title={`Es el turno de las ${this.turnOfCross ? "Xs" : "Os"}.`}
        bg={this.turnOfCross ? "bg-violet-2" : "bg-aqua"}
      />
    );

    if (this.state.areWinner)
      banner = (
        <Banner
          title={`El ganador es el jugador de ${!this.turnOfCross ? "Xs" : "Os"}.`}
          bg={"bg-green-600"}
        />
      );

    return (
      <React.StrictMode>
        {banner}
        <div
          id="grid"
          className="w-fit grid grid-cols-3 grid-rows-3 my-3 mx-auto gap-1 p-1"
        >
          {this.state.cells.map((occupiedBy, i) => (
            <Cell
              occupiedBy={occupiedBy}
              key={i}
              onClick={this.selectCell.bind(this, i)}
            />
          ))}
        </div>
      </React.StrictMode>
    );
  }
}

export default App;
