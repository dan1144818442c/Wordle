import { useState, useEffect } from "react";

export default function useRandomWord() {
  const [word, setWord] = useState("");

  useEffect(() => {
    async function loadWords() {
      const response = await fetch("list_words.txt");
      const text = await response.text();
      const wordsArray = text.split("\n").map(w => w.trim()).filter(Boolean);

      const random = wordsArray[Math.floor(Math.random() * wordsArray.length)];
      console.log()
      setWord(random.toUpperCase());
    }

    loadWords();
  }, []);
  console.log(word)

  return word;
}
