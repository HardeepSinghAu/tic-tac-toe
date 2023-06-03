import "./App.css";
import { Board } from "./components/Board";
import React, { useState } from "react";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  return (
    <div className="App">
      <Board board={board} onClick={null} />
    </div>
  );
}

export default App;
