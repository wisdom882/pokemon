import React from 'react'
import { WorkShopNote } from '../../reusables/workshop-note'
import file from './01.md'

function Board(){
    //const [squares, setSquares] = useState(Array(9).fill(null))
    const squares = Array(9).fill(null);
    function selectSquare(){

    }

    function renderSquare(i){
        return(
            
            <button onClick={() => selectSquare()} className="square">{squares[i]}</button>
            
        )
    }

    function restart(){
        //setSquares()
    }

    return(
        <div>
            <div className="status">STATUS: </div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>

            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>

            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>

            <button onClick={restart()} className="restart">restart</button>
        </div>
    )
}

function Game(){
    return(
        <div className="game">
            <div className="game-board">
                <Board />
            </div>
        </div>
    )
}

function App(){
    return(
    <div className="grid-container">
        <WorkShopNote file={file} />
        <Game />
    </div>
    ) 
    
}

export default App