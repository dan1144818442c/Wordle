import { useState, useRef, useEffect } from "react";
import Board from "./components/Board";
import { handleKeyDown } from "./assets/keyboard";

export default function App() {
  const [rows, setRows] = useState(
    Array.from({ length: 6 }, () => Array(5).fill(""))
  );

  const [colors, setColors] = useState(
    Array.from({ length: 6 }, () => Array(5).fill(""))
  );

  const [currentRow, setCurrentRow] = useState(0);
  const [currentCol, setCurrentCol] = useState(0);

  const secret_word = "APPLE";

  const divRef = useRef(null);

  // נותן פוקוס אוטומטי ל-div
  useEffect(() => {
    if (divRef.current) {
      divRef.current.focus();
    }
  }, []);

  return (
    <div
      ref={divRef}
      tabIndex="0"
      onKeyDown={(e) =>
        handleKeyDown(
          e,
          rows,
          setRows,
          currentRow,
          setCurrentRow,
          currentCol,
          setCurrentCol,
          colors,
          setColors,
          secret_word
        )
      }
      style={{ outline: "none", minHeight: "100vh", padding: "20px" }}
    >
      <h1>Wordle Game</h1>
      <Board rows={rows} colors={colors} />
    </div>
  );
}
