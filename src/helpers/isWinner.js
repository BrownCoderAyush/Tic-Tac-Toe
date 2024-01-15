export default function isWinner(board ,symbol){
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