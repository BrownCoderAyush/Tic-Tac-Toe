import { useState } from "react";
import Card from "../Card/Card";
import "./Grid.css";


import { ToastContainer ,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import isWinner from "../../helpers/isWinner";

function Grid({ noOfCards }) {
    let [currentTurn,setCurrentTurn]= useState(true); // false -> X , true -> 0
    const [board,SetBoard] = useState(Array(noOfCards).fill(""));
    const [winner,setWinner] = useState(null); 


    function onPlay(index){
        if(currentTurn == true){
            board[index]="O";
        }else{
            board[index]="X";
        }
        const winner = isWinner(board, (currentTurn)?"O":"X");
        console.log(winner,"winner");
        SetBoard([...board]);
        if(winner){
            toast.success(`Wow you win the game ${winner}`);
            setWinner(winner);
        }
        setCurrentTurn(!currentTurn);
    }
    function reset(){
        SetBoard(Array(noOfCards).fill(""));
        setWinner(null);
        setCurrentTurn(true);
    }

    return (
        <div className="grid-wrapper">
            {winner && 
            (<>
            <h1 className="turn-highlight">Great! {winner} is Winner </h1> 
            <button onClick={reset} className="reset">Reset Game</button>
            </>)}
            <h1 className="turn-highlight">Current Turn : {currentTurn? 'O' : 'X'}</h1>
            <div className="grid">
                {board.map(
                    (element, idx) => { return (<Card gameEnded = {winner?true:false} onPlay={onPlay} key={idx} index={idx}  player ={element}/> ) }
                )};
                <ToastContainer position="top-right"/>
            </div>
        </div>

        
    )
}

export default Grid;