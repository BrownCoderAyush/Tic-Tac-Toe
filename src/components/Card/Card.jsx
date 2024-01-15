import React from "react";
import Icon from "../Icons/Icon";
import "./Card.css";

function Card ({onPlay,player,index,gameEnded}) {
    let icon = <Icon/>
    if(player=="O"){
        icon = <Icon name="circle"/>
    }else if(player == "X"){
        icon = <Icon name ="cross"/>
    }
    return (
        <div className="card" onClick={()=>!gameEnded && player=="" &&  onPlay(index)}>
           {icon}
        </div>
    )
}
export default Card;