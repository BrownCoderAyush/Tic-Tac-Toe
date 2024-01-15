import { useState } from "react";
import Card from "../Card/Card";
import "./Grid.css";
import { ToastContainer ,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Grid({ noOfCards }) {
    let [currentTurn,setCurrentTurn]= useState(true); // false -> X , true -> 0
    const [board,SetBoard] = useState(Array(noOfCards).fill(""));
    const [winner,setWinner] = useState(null); 
    function isWinner(symbol){
        console.log(board,symbol);
        // row matchings 
        if(board[0]== symbol && board[1]== symbol && board[2]==symbol)return symbol;
        if(board[3]== symbol && board[4]== symbol && board[5]==symbol)return symbol;
        if(board[6]== symbol && board[7]== symbol && board[8]==symbol)return symbol;

        // column matchings
        if(board[0] == symbol && board[3] == symbol && symbol == board[6])return symbol;
        if(board[1]== symbol && board[4]== symbol && board[7]==symbol)return symbol;
        if(board[2]== symbol && board[5]== symbol && board[8]==symbol)return symbol;

        // diagonal matchings 
        if(board[0]== symbol && board[4]== symbol && board[8]==symbol)return symbol;
        if(board[2]== symbol && board[4]== symbol && board[6]==symbol)return symbol;

        return false;
    }
    function onPlay(index){
        if(currentTurn == true){
            board[index]="O";
        }else{
            board[index]="X";
        }
        const winner = isWinner((currentTurn)?"O":"X");
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
                    (element, idx) => { return (<Card onPlay={onPlay} key={idx} index={idx}  player ={element}/> ) }
                )};
                <ToastContainer position="top-right"/>
            </div>
        </div>

        
    )
}

export default Grid;