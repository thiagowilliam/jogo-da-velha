import { useState } from "react";
import "./styles.scss";

function App() {
  const [gameData, setGameData] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [turn, setTurn] = useState(1);

  function handleClick(clickedIndex: number) {
    if (gameData[clickedIndex] !== 0) {
      return;
    }
    setGameData((prev) => {
      const newGameData = [...prev];
      newGameData[clickedIndex] = turn;
      return newGameData;
    });

    setTurn((prev) => (prev === 1 ? 2 : 1));
  }
  return (
    <div className="board-game">
      {gameData.map((value, index) => (
        <span key={index} onClick={() => handleClick(index)}>
          {value === 1 && "x"}
          {value === 2 && "o"}
        </span>
      ))}
    </div>
  );
}

export default App;
