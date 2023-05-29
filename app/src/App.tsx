import React, {useEffect, useState} from 'react';
import './App.css'
import {Board} from "./models/Board";
import BoardComp from "./components/BoardComp";

function App() {
    const [board, setBoard] = useState(new Board())

    useEffect(() => {
        restart()
    }, [])

    const restart = () => {
        const newBoard = new Board();
        newBoard.initCells();
        newBoard.addFigures();
        setBoard(newBoard);
    }

  return (
    <div className={"app"}>
        <BoardComp
            board={board}
            setBoard={setBoard}
        />
    </div>
  );
}

export default App;
