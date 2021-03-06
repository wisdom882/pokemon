import React from 'react';
import  useLocalStorageState from '../../Utils/localstorage'
import { WorkShopNote } from '../../reusables/workshop-note'
import file from './01.md'

function Board(){
    const [squares, setSquares] = useLocalStorageState('board',Array(9).fill(null))
    
    // const squares = Array(9).fill(null);
    // squares[0] = "X"
    // squares[1] = "O"
    // squares[2] = "X"
    const nextValue = calculateNextPlayer(squares)
    const winner = calculateWinner(squares)
    const status = calculateStatus(winner,nextValue,squares)
    
    function calculateNextPlayer(squares){
        const countX = squares.filter((letter) => letter === 'X').length
        const countO = squares.filter((letter) => letter === '0').length
        return countX === countO ? 'X' : '0'
        
        
    }
    function selectSquare(square){
        if(winner || squares[square] === true){
            return;
        }
        const squareCopy = [...squares]
        squareCopy[square] = nextValue
        setSquares(squareCopy);
    }

    function calculateWinner(squares){

        const lines = [

            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        for(let i = 0 ; i< lines.length ; i++){

            const[a,b,c] = lines[i];
            if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
                return squares[a];
            }
        }
        return null;
    }

    function calculateStatus(winner, nextValue, squares){
        
        return winner
        ? `Winner: ${winner}`
        : squares.every(Boolean)
        ? `it's a tie`
        : `Next value: ${nextValue}`
    }
    function renderSquare(i){
        return(
            <button onClick={() => selectSquare(i)} className="square">{squares[i]}</button>
        )
    }

    function restart(){
        setSquares(Array(9).fill(null))
    }


    return(
        <div>
            <div className="status">STATUS: {status} </div>
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

            <button onClick={restart} className="restart">restart</button>
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