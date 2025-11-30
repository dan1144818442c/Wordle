import Row from "./Row";
import "../style/board.css"

export default function Board({ rows, colors }) {
  return (
    <div className="board">
      {rows.map((row, index) => (
        <Row key={index} letters={row} colors={colors[index]} />
      ))}
    </div>
  );
}
