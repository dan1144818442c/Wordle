export function handleKeyDown(
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
) {
  const key = e.key.toUpperCase();

  // הדפסת key לבדיקה
  console.log("Key pressed:", key);

  // אותיות A-Z
  if (/^[A-Z]$/.test(key)) {
    if (currentCol < 5) {
      const newRows = rows.map((row) => [...row]); // clone deep
      newRows[currentRow][currentCol] = key;
      setRows(newRows);
      setCurrentCol(currentCol + 1);
    }
  }

  // Backspace
  if (key === "BACKSPACE") {
    if (currentCol > 0) {
      const newRows = rows.map((row) => [...row]);
      newRows[currentRow][currentCol - 1] = "";
      setRows(newRows);
      setCurrentCol(currentCol - 1);
    }
  }

  // Enter
  if (key === "ENTER") {
    if (currentCol === 5) {
      const guess = rows[currentRow].join("");

      // צבעים
      const newColors = colors.map((row) => [...row]);
      const rowColors = Array(5).fill("gray");

      for (let i = 0; i < 5; i++) {
        if (guess[i] === secret_word[i]) rowColors[i] = "green";
        else if (secret_word.includes(guess[i])) rowColors[i] = "yellow";
      }

      newColors[currentRow] = rowColors;
      setColors(newColors);

      // מעבר שורה
      if (currentRow < rows.length - 1) {
        setCurrentRow(currentRow + 1);
        setCurrentCol(0);
      }
    }
  }
}
