import "./Cell.css";
import React from "react";

function Cell(props) {
  return (
    <div
      className={`peer w-40 max-w-full aspect-square ${props.occupiedBy || "blank"}`}
      onClick={props.onClick}
    >
      <span className={props.occupiedBy?.includes("winner") ? "block" : "hidden"}>Winner</span>
    </div>
  );
}

export default Cell;
