 import React from 'react';
 import ReactDOM from 'react-dom';
 import './index.css';

class Square extends React.Component {
  constructor(props){
    super();
    this.state = {
      number: props.squareNumber,
      text : null
    }
  }
  onClick = () => {
    if(this.state.text === null){
      this.setState ({text: this.props.status});
      this.props.onChange(this.state.number);
    } else{
      alert("what the hell are you doing!!");
    }

  }
  render() {
    return (
      <button className="square" onClick = {this.onClick}>
      {this.state.text}
      </button>
    )
  }
}

class Board extends React.Component {
  constructor(props){
    super();
    this.state = {
      status: 'X',
      board: [[' ', ' ', ' '],
              [' ', ' ', ' '],
              [' ', ' ', ' ']],
      winner: null,
    }
  }
  findWinner = () => {
    let board = this.state.board;
    //horizontal
    for (let i1 = 0; i1 < board.length; i1++) {
          if(board[i1][0] === board[i1][1] && board[i1][1] === board[i1][2] && board[i1][0] !== ' '){
           this.state.winner = board[i1][0];
          }
    }
    //vertical
    const i1 = 0;
    for (let i2 = 0; i2 < board[i1].length; i2++) {
          if(board[i1][i2] === board[i1+1][i2] && board[i1+1][i2] === board[i1+2][i2] && board[i1][i2] !== ' '){
            this.state.winner = board[i1][i2];
        }
      }
    //diagonal
    if(board[0][0]===board[1][1] && board[1][1]===board[2][2] && board[0][0] !== ' '){
      this.state.winner = board[0][0];
      }
    else if(board[0][2]===board[1][1] && board[1][1]===board[2][0] && board[2][0] !== ' '){
      this.state.winner = board[0][2];
      }
    let tie = true;
    for(let i1 = 0; i1 < 3; i1++)
        for(let i2 = 0; i2 < 3; i2++ )
          if(board[i1][i2] === ' ')
              tie = false;
    if(tie){
      this.state.winner = "tie";
    }
   }
  onChange = (num) => {
    this.state.board[Math.floor(num/3)][num%3] = this.state.status;
    (this.state.status === 'X' ? this.setState({status: 'O'}) : this.setState({status: 'X'}));
    this.findWinner();
    //console.log(this.state.winner);
    if(this.state.winner === "tie"){
      alert(this.state.winner);
    } else if(this.state.winner){
      alert("The winner is " + this.state.winner);
       window.location.reload();
    }
    }
  renderSquare(i) {
    return <Square squareNumber = {i} onChange = {this.onChange} status = {this.state.status}/>
  }
  render() {
    return (
      <div>
        <div className="status"> Next player is {this.state.status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
           <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}



// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
