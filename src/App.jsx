import { useState, useRef, useEffect } from "react";
import Board from "./components/Board";
import { handleKeyDown } from "./assets/keyboard";
import './App.css'
import useRandomWord from "./assets/random_word";


export default function App() {
  const [rows, setRows] = useState(Array.from({ length: 6 }, () => Array(5).fill("")));
  const [colors, setColors] = useState( Array.from({ length: 6 }, () => Array(5).fill("")));
  const [currentRow, setCurrentRow] = useState(0);
  const [currentCol, setCurrentCol] = useState(0);
  const [isWin , setIsWin] = useState(false);

  const secret_word = useRandomWord();
  console.log(secret_word)
  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
      divRef.current.focus();
    }
  }, []);

  return (
    <div
      className="App"
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
          secret_word,
          isWin,
          setIsWin
        )
      }
      style={{ outline: "none", minHeight: "100vh", padding: "20px" }}
    >
      <h1>Wordle Game</h1>

    {!isWin ? (
      <Board rows={rows} colors={colors} />
    ) : (
      <h2 style={{ color: "green", fontSize: "32px" }}>🎉 You Won! after {currentRow} times 🎉</h2>
    )}
    </div>
  );
}

