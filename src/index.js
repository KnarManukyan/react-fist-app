 import React from 'react';
 import ReactDOM from 'react-dom';
 import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

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
      this.props.onChange();
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
      status: 'X'
    }
  }
  changeStatus = () => {
    if(this.state.status == 'X'){
      this.setState({status: 'O'});
    } else{
      this.setState({status: 'X'});
    }
  }
  renderSquare(i) {
    return <Square squareNumber = {i} onChange = {this.changeStatus} status = {this.state.status}/>;
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
