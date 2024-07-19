import React from "react";
import "./App.css";

const majorScale = [0, 2, 4, 5, 7, 9, 11];
const suffix = ["", "m", "m", "", "", "m", "dim"];

function App() {
  const scales = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
  ];
  const [selected, setSelected] = React.useState("C");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelected(e.currentTarget.value);
  };

  return (
    <>
      <p>Select the scale:</p>
      {scales.map((scale) => (
        <button key={scale} value={scale} onClick={handleClick}>
          {scale}
        </button>
      ))}
      <p style={{ fontWeight: "bold" }}>{selected}</p>
      <p>Major scale:</p>
      {majorScale.map((step, index) => (
        <span style={{ margin: 10 }} key={index}>
          {scales[(scales.indexOf(selected) + step) % 12]}
          {suffix[index]}
        </span>
      ))}
    </>
  );
}

export default App;
