import { useEffect, useState } from "react";
import "./styles.scss";

const winningCombinations = [
  //horizontals
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  //verticals
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  //diagonals
  [0, 4, 8],
  [2, 4, 6],
];

function App() {
  const [gameData, setGameData] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [turn, setTurn] = useState(1);
  const [winningCombo, setWinningCombo] = useState(null);

  function handleClick(clickedIndex: number) {
    if (gameData[clickedIndex] !== 0) {
      return;
    }
    if (winningCombo) {
      return;
    }
    setGameData((prev) => {
      const newGameData = [...prev];
      newGameData[clickedIndex] = turn;
      return newGameData;
    });

    setTurn((prev) => (prev === 1 ? 2 : 1));
  }

  useEffect(() => {
    checkWinner();
    // winningCombinations.forEach((combo) => {
    //   const [a, b, c] = combo;
    //   if (
    //     gameData[a] !== 0 &&
    //     gameData[a] === gameData[b] &&
    //     gameData[b] === gameData[c]
    //   ) {
    //     seWinningCombo(combo)
    //   }
    // });
  }, [gameData]);

  const checkWinner = () => {
    let winner: any = null;

    // for (let values of winningCombinations) {
    //   if (
    //     gameData[values[0]] !== 0 &&
    //     gameData[values[0]] === 1 &&
    //     gameData[values[1]] === 1 &&
    //     gameData[values[2]] === 1
    //   ) {
    //     winner = "player 1";
    //   }

    //   if (
    //     gameData[values[0]] !== 0 &&
    //     gameData[values[0]] === 1 &&
    //     gameData[values[1]] === 1 &&
    //     gameData[values[2]] === 1
    //   ) {
    //     winner = "player 1";
    //   }
    //   if (winner) {
    //     setWinningCombo(values);
    //     break;
    //   }
    // }

    winningCombinations.forEach((combo: any) => {
      const [a, b, c] = combo;
      if (
        gameData[a] !== 0 &&
        gameData[a] === gameData[b] &&
        gameData[b] === gameData[c]
      ) {
        winner = gameData[a];
      }
      console.log(combo);
      if (winner) {
        setWinningCombo(combo);
      }
    });

    console.log("winner: ", winner);
  };
  return (
    <div className="board-game">
      {gameData.map((value, index) => (
        <span key={index} onClick={() => handleClick(index)}>
          <abbr title="empty">{index}</abbr>
          {value === 1 && "x"}
          {value === 2 && "o"}
        </span>
      ))}
    </div>
  );
}

export default App;
