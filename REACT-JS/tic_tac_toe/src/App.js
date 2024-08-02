import { useState } from "react";
import "./App.css";
import Square from "./Square";

function App() {
  const [xisnxt, setxisnxt] = useState(true);
  const [square, setsquare] = useState(Array(9).fill(null));

  const winner = calc(square);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xisnxt ? "X" : "O");
  }

  function sqrClk(i) {
    console.log("clicked");
    const nextsqr = square.slice();
    if (square[i] || calc(square)) {
      return;
    }

    if (xisnxt) {
      nextsqr[i] = "x";
    } else {
      nextsqr[i] = "o";
    }

    setsquare(nextsqr);
    setxisnxt(!xisnxt);

    console.log(square);
  }
  function calc(square) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        square[a] === square[b] &&
        square[b] === square[c] &&
        square[a] === square[c]
      ) {
        return square[a];
      }
    }
    return null;
  }

  return (
    <div className="box">
      <div className="status">{status}</div>
      <div className="row">
        <Square
          value={square[0]}
          onsqrClick={function () {
            sqrClk(0);
          }}
        />
        <Square
          value={square[1]}
          onsqrClick={function () {
            sqrClk(1);
          }}
        />
        <Square
          value={square[2]}
          onsqrClick={function () {
            sqrClk(2);
          }}
        />
      </div>
      <div className="row">
        <Square
          value={square[3]}
          onsqrClick={function () {
            sqrClk(3);
          }}
        />
        <Square
          value={square[4]}
          onsqrClick={function () {
            sqrClk(4);
          }}
        />
        <Square
          value={square[5]}
          onsqrClick={function () {
            sqrClk(5);
          }}
        />
      </div>
      <div className="row">
        <Square
          value={square[6]}
          onsqrClick={function () {
            sqrClk(6);
          }}
        />
        <Square
          value={square[7]}
          onsqrClick={function () {
            sqrClk(7);
          }}
        />
        <Square
          value={square[8]}
          onsqrClick={function () {
            sqrClk(8);
          }}
        />
      </div>
    </div>
  );
}

export default App;
