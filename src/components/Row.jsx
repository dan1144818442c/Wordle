import "../style/board.css"

export default function Row({ letters, colors }) {
  return (
    <div className="row">
      {letters.map((letter, index) => (
        <div key={index} className={`cell ${colors[index] || ""}`}>
          {letter}
        </div>
      ))}
    </div>
  );
}
