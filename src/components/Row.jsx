
import "../style/board.css";
import Cell from "./Cell_jsx"; 
export default function Row({ letters, colors }) {
  return (
    <div className="row">
      {letters.map((letter, index) => (
        <Cell
          key={index}
          letter={letter}
          color={colors[index]}     
          delay={index * 400}        
        />
      ))}
    </div>
  );
}
