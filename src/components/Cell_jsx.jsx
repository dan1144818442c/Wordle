import { useState, useEffect } from "react";
import "../style/board.css";

export default function Cell({ letter, color, delay }) {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    if (color) { // flip only after guess is submitted
      const timer = setTimeout(() => setFlipped(true), delay);
      return () => clearTimeout(timer);
    }
  }, [color, delay]);

  return (
    <div className={`cell ${flipped ? "flipped" : ""}`}>
      <div className="cell-inner">
        <div className="cell-front">{letter}</div>
        <div className={`cell-back ${color}`}>{letter}</div>
      </div>
    </div>
  );
}
